import React, { useEffect, useRef } from 'react';

/**
 * WebGL fragment shader hero. Renders animated flowing mesh gradient
 * blobs (purple / teal / coral / navy) on a dark backdrop.
 * Falls back gracefully to a CSS gradient if WebGL is unavailable.
 */
export default function WebGLHero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { premultipliedAlpha: false, antialias: true });
    if (!gl) return; // Fallback CSS gradient is shown via canvas parent.

    const vs = `
      attribute vec2 aPos;
      void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
    `;
    const fs = `
      precision highp float;
      uniform vec2 uRes;
      uniform float uTime;

      // Simple hash + smooth noise
      float hash(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
      float noise(vec2 p) {
        vec2 i = floor(p); vec2 f = fract(p);
        float a = hash(i);
        float b = hash(i + vec2(1.0, 0.0));
        float c = hash(i + vec2(0.0, 1.0));
        float d = hash(i + vec2(1.0, 1.0));
        vec2 u = f * f * (3.0 - 2.0 * f);
        return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
      }

      // Signed distance to a blob
      float blob(vec2 uv, vec2 c, float r) {
        float d = length(uv - c) - r;
        return smoothstep(0.0, 0.7, 1.0 - clamp(d * 1.8, 0.0, 1.0));
      }

      void main() {
        vec2 uv = (gl_FragCoord.xy - 0.5 * uRes) / min(uRes.x, uRes.y);
        float t = uTime * 0.12;

        // Animate 4 blob centres
        vec2 c1 = vec2(cos(t * 0.7) * 0.6 - 0.4, sin(t * 0.5) * 0.4 + 0.1);
        vec2 c2 = vec2(cos(t * 0.9 + 1.7) * 0.5 + 0.5, sin(t * 0.6 + 0.4) * 0.5 - 0.1);
        vec2 c3 = vec2(cos(t * 0.5 + 3.1) * 0.6, sin(t * 0.8 + 2.0) * 0.5);
        vec2 c4 = vec2(cos(t * 0.6 + 4.5) * 0.4 + 0.2, sin(t * 0.7 + 5.3) * 0.6 - 0.3);

        float b1 = blob(uv, c1, 0.85);
        float b2 = blob(uv, c2, 0.9);
        float b3 = blob(uv, c3, 0.75);
        float b4 = blob(uv, c4, 0.7);

        // Colours
        vec3 col = vec3(0.024, 0.031, 0.122); // #06081F navy base
        vec3 purple = vec3(0.486, 0.227, 0.929); // #7C3AED
        vec3 teal   = vec3(0.078, 0.722, 0.651); // #14B8A6
        vec3 coral  = vec3(1.000, 0.420, 0.278); // #FF6B47
        vec3 amber  = vec3(0.984, 0.749, 0.141); // #FBBF24

        col = mix(col, purple, b1 * 0.85);
        col = mix(col, teal,   b2 * 0.75);
        col = mix(col, coral,  b3 * 0.65);
        col = mix(col, amber,  b4 * 0.35);

        // Grain
        float g = noise(gl_FragCoord.xy * 1.2 + uTime * 0.5);
        col += (g - 0.5) * 0.03;

        // Vignette
        float vig = smoothstep(1.4, 0.4, length(uv));
        col *= vig * 0.85 + 0.35;

        gl_FragColor = vec4(col, 1.0);
      }
    `;

    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
        console.warn('shader error', gl.getShaderInfoLog(s));
      }
      return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, vs));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, fs));
    gl.linkProgram(prog);
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const uRes = gl.getUniformLocation(prog, 'uRes');
    const uTime = gl.getUniformLocation(prog, 'uTime');

    let rafId = 0;
    let start = performance.now();

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = canvas.clientWidth * dpr;
      const h = canvas.clientHeight * dpr;
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w; canvas.height = h;
        gl.viewport(0, 0, w, h);
      }
    };

    const render = () => {
      resize();
      const t = (performance.now() - start) / 1000;
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, t);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      rafId = requestAnimationFrame(render);
    };
    render();

    const onResize = () => resize();
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="hero-wgl__canvas"
      aria-hidden="true"
      style={{
        background:
          'radial-gradient(circle at 30% 30%, rgba(124,58,237,0.6), transparent 40%), radial-gradient(circle at 70% 60%, rgba(20,184,166,0.5), transparent 40%), radial-gradient(circle at 60% 90%, rgba(255,107,71,0.4), transparent 40%), #06081F',
      }}
    />
  );
}
