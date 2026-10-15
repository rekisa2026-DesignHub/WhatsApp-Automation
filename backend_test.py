import requests
import sys
from datetime import datetime

class RekisaAPITester:
    def __init__(self, base_url="https://growth-systems-site.preview.emergentagent.com"):
        self.base_url = base_url
        self.tests_run = 0
        self.tests_passed = 0
        self.failed_tests = []

    def run_test(self, name, method, endpoint, expected_status, data=None, check_response=None):
        """Run a single API test"""
        url = f"{self.base_url}/api/{endpoint}"
        headers = {'Content-Type': 'application/json'}

        self.tests_run += 1
        print(f"\n🔍 Testing {name}...")
        
        try:
            if method == 'GET':
                response = requests.get(url, headers=headers, timeout=10)
            elif method == 'POST':
                response = requests.post(url, json=data, headers=headers, timeout=10)

            success = response.status_code == expected_status
            
            # Additional response checks
            if success and check_response:
                try:
                    resp_data = response.json()
                    success = check_response(resp_data)
                    if not success:
                        print(f"❌ Failed - Response validation failed")
                        self.failed_tests.append({"test": name, "reason": "Response validation failed", "response": resp_data})
                except Exception as e:
                    success = False
                    print(f"❌ Failed - Response check error: {str(e)}")
                    self.failed_tests.append({"test": name, "reason": f"Response check error: {str(e)}"})
            
            if success:
                self.tests_passed += 1
                print(f"✅ Passed - Status: {response.status_code}")
                try:
                    print(f"   Response: {response.json()}")
                except:
                    pass
            else:
                print(f"❌ Failed - Expected {expected_status}, got {response.status_code}")
                try:
                    print(f"   Response: {response.text}")
                except:
                    pass
                self.failed_tests.append({"test": name, "expected": expected_status, "got": response.status_code, "response": response.text[:200]})

            return success, response.json() if success and response.text else {}

        except Exception as e:
            print(f"❌ Failed - Error: {str(e)}")
            self.failed_tests.append({"test": name, "reason": str(e)})
            return False, {}

    def test_health(self):
        """Test health endpoint"""
        return self.run_test(
            "Health Check",
            "GET",
            "health",
            200,
            check_response=lambda r: r.get('ok') == True and r.get('db') == 'up'
        )

    def test_audit_submission(self):
        """Test audit form submission"""
        timestamp = datetime.now().strftime('%H%M%S')
        return self.run_test(
            "Audit Submission",
            "POST",
            "audit",
            200,
            data={
                "first_name": "John",
                "last_name": "Doe",
                "business_name": f"Test Business {timestamp}",
                "email": f"test{timestamp}@example.com",
                "phone": "+27123456789",
                "website": "https://example.com",
                "industry": "Technology",
                "team_size": "10-50",
                "main_goal": "Improve digital operations",
                "current_systems": "Basic CRM",
                "biggest_challenge": "Integration",
                "engagement_type": "Full implementation"
            },
            check_response=lambda r: r.get('ok') == True and 'id' in r
        )

    def test_contact_submission(self):
        """Test contact form submission"""
        timestamp = datetime.now().strftime('%H%M%S')
        return self.run_test(
            "Contact Submission",
            "POST",
            "contact",
            200,
            data={
                "name": "Jane Smith",
                "email": f"contact{timestamp}@example.com",
                "company": "Test Company",
                "phone": "+27123456789",
                "subject": "General Inquiry",
                "message": "This is a test message"
            },
            check_response=lambda r: r.get('ok') == True and 'id' in r
        )

    def test_workshop_enquiry(self):
        """Test workshop enquiry submission"""
        timestamp = datetime.now().strftime('%H%M%S')
        return self.run_test(
            "Workshop Enquiry",
            "POST",
            "workshop-enquiry",
            200,
            data={
                "workshop": "Growth Marketing Workshop",
                "name": "Bob Johnson",
                "email": f"workshop{timestamp}@example.com",
                "company": "Test Corp",
                "phone": "+27123456789",
                "team_size": "5-10",
                "preferred_dates": "Next month",
                "goals": "Improve marketing skills"
            },
            check_response=lambda r: r.get('ok') == True and 'id' in r
        )

    def test_tool_help(self):
        """Test tool help enquiry submission"""
        timestamp = datetime.now().strftime('%H%M%S')
        return self.run_test(
            "Tool Help Enquiry",
            "POST",
            "tool-help",
            200,
            data={
                "tool": "Ecwid",
                "name": "Alice Brown",
                "email": f"toolhelp{timestamp}@example.com",
                "company": "Test Shop",
                "phone": "+27123456789",
                "context": "Need help setting up payment gateway"
            },
            check_response=lambda r: r.get('ok') == True and 'id' in r
        )

    def test_newsletter_signup(self):
        """Test newsletter signup"""
        timestamp = datetime.now().strftime('%H%M%S')
        return self.run_test(
            "Newsletter Signup",
            "POST",
            "newsletter",
            200,
            data={
                "email": f"newsletter{timestamp}@example.com",
                "name": "Newsletter Subscriber"
            },
            check_response=lambda r: r.get('ok') == True
        )

    def test_newsletter_idempotency(self):
        """Test newsletter signup idempotency (same email twice)"""
        test_email = f"idempotent{datetime.now().strftime('%H%M%S')}@example.com"
        
        # First signup
        success1, _ = self.run_test(
            "Newsletter Signup (First)",
            "POST",
            "newsletter",
            200,
            data={
                "email": test_email,
                "name": "Idempotent Test"
            },
            check_response=lambda r: r.get('ok') == True
        )
        
        # Second signup with same email
        success2, _ = self.run_test(
            "Newsletter Signup (Duplicate - Should Still Return OK)",
            "POST",
            "newsletter",
            200,
            data={
                "email": test_email,
                "name": "Idempotent Test 2"
            },
            check_response=lambda r: r.get('ok') == True
        )
        
        return success1 and success2

    def test_honeypot_audit(self):
        """Test honeypot field on audit endpoint"""
        timestamp = datetime.now().strftime('%H%M%S')
        return self.run_test(
            "Honeypot Field (Audit) - Should Return OK Without Persisting",
            "POST",
            "audit",
            200,
            data={
                "first_name": "Bot",
                "last_name": "Spammer",
                "business_name": "Spam Inc",
                "email": f"bot{timestamp}@spam.com",
                "honeypot": "I am a bot"
            },
            check_response=lambda r: r.get('ok') == True
        )

    def test_honeypot_contact(self):
        """Test honeypot field on contact endpoint"""
        timestamp = datetime.now().strftime('%H%M%S')
        return self.run_test(
            "Honeypot Field (Contact) - Should Return OK Without Persisting",
            "POST",
            "contact",
            200,
            data={
                "name": "Bot Spammer",
                "email": f"bot{timestamp}@spam.com",
                "message": "Spam message",
                "honeypot": "I am a bot"
            },
            check_response=lambda r: r.get('ok') == True
        )

    def test_missing_required_fields_audit(self):
        """Test validation error for missing required fields"""
        success, _ = self.run_test(
            "Missing Required Fields (Audit) - Should Return 422",
            "POST",
            "audit",
            422,
            data={
                "first_name": "John"
                # Missing required fields: last_name, business_name, email
            }
        )
        return success

    def test_missing_required_fields_contact(self):
        """Test validation error for missing required fields"""
        success, _ = self.run_test(
            "Missing Required Fields (Contact) - Should Return 422",
            "POST",
            "contact",
            422,
            data={
                "name": "John"
                # Missing required fields: email, message
            }
        )
        return success

    def test_invalid_email_format(self):
        """Test validation error for invalid email"""
        success, _ = self.run_test(
            "Invalid Email Format - Should Return 422",
            "POST",
            "contact",
            422,
            data={
                "name": "John Doe",
                "email": "not-an-email",
                "message": "Test message"
            }
        )
        return success

def main():
    print("=" * 60)
    print("REKISA BACKEND API TEST SUITE")
    print("=" * 60)
    
    tester = RekisaAPITester()

    # Run all tests
    print("\n" + "=" * 60)
    print("BASIC HEALTH CHECK")
    print("=" * 60)
    tester.test_health()

    print("\n" + "=" * 60)
    print("FORM SUBMISSION TESTS")
    print("=" * 60)
    tester.test_audit_submission()
    tester.test_contact_submission()
    tester.test_workshop_enquiry()
    tester.test_tool_help()
    tester.test_newsletter_signup()

    print("\n" + "=" * 60)
    print("IDEMPOTENCY TESTS")
    print("=" * 60)
    tester.test_newsletter_idempotency()

    print("\n" + "=" * 60)
    print("HONEYPOT TESTS")
    print("=" * 60)
    tester.test_honeypot_audit()
    tester.test_honeypot_contact()

    print("\n" + "=" * 60)
    print("VALIDATION ERROR TESTS")
    print("=" * 60)
    tester.test_missing_required_fields_audit()
    tester.test_missing_required_fields_contact()
    tester.test_invalid_email_format()

    # Print summary
    print("\n" + "=" * 60)
    print("TEST SUMMARY")
    print("=" * 60)
    print(f"📊 Tests passed: {tester.tests_passed}/{tester.tests_run}")
    
    if tester.failed_tests:
        print(f"\n❌ Failed tests ({len(tester.failed_tests)}):")
        for i, failure in enumerate(tester.failed_tests, 1):
            print(f"\n{i}. {failure.get('test', 'Unknown')}")
            for key, value in failure.items():
                if key != 'test':
                    print(f"   {key}: {value}")
    
    success_rate = (tester.tests_passed / tester.tests_run * 100) if tester.tests_run > 0 else 0
    print(f"\n✨ Success rate: {success_rate:.1f}%")
    
    return 0 if tester.tests_passed == tester.tests_run else 1

if __name__ == "__main__":
    sys.exit(main())
