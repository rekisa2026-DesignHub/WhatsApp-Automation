import React, { useState } from 'react';
import axios from 'axios';

const BACKEND = process.env.REACT_APP_BACKEND_URL || '';

export function useSubmit(endpoint) {
  const [state, setState] = useState({ status: 'idle', error: null });
  const submit = async (payload) => {
    setState({ status: 'loading', error: null });
    try {
      const url = `${BACKEND}/api/${endpoint}`;
      const res = await axios.post(url, { ...payload, source_url: typeof window !== 'undefined' ? window.location.href : '' });
      if (res.data && res.data.ok) {
        setState({ status: 'success', error: null });
        return { ok: true };
      }
      setState({ status: 'error', error: 'Something went wrong. Please try again.' });
      return { ok: false };
    } catch (e) {
      const msg = e.response?.data?.detail || e.message || 'Something went wrong. Please try again.';
      setState({ status: 'error', error: typeof msg === 'string' ? msg : 'Please check your details and try again.' });
      return { ok: false };
    }
  };
  return { submit, ...state };
}

export function Field({ label, name, value, onChange, type = 'text', required = false, placeholder = '', as = 'input', options = [] }) {
  const Tag = as;
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}{required && ' *'}</label>
      {as === 'select' ? (
        <select id={name} name={name} value={value} onChange={onChange} required={required} data-testid={`field-${name}`}>
          <option value="">Select…</option>
          {options.map((o) => <option key={o.value || o} value={o.value || o}>{o.label || o}</option>)}
        </select>
      ) : as === 'textarea' ? (
        <textarea id={name} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder} data-testid={`field-${name}`} />
      ) : (
        <input id={name} name={name} type={type} value={value} onChange={onChange} required={required} placeholder={placeholder} data-testid={`field-${name}`} />
      )}
    </div>
  );
}

export function Honeypot({ value, onChange }) {
  return (
    <div className="honeypot" aria-hidden>
      <label htmlFor="honeypot">Do not fill this in</label>
      <input id="honeypot" name="honeypot" type="text" value={value || ''} onChange={onChange} tabIndex={-1} autoComplete="off" />
    </div>
  );
}
