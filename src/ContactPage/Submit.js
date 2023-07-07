function submit() {
    fetch('https://api2.juvlon.com/v4/httpSendMail', {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                // body: '{\n   "ApiKey":"INSERT_YOUR_JUVLON_ACCOUNT_API_KEY",\n   "requests":[{"subject":"Hello",\n                "from":"support@juvlon.com",\n                "body":"This is an API test from Juvlon",\n                "to":"sales@nichelive.com"}]\n}',
                body: JSON.stringify({
                  'ApiKey': 'OTYzMDAjIyMyMDIzLTA3LTA3IDE3OjMwOjU3',
                  'requests': [
                    {
                      'subject': 'Hello',
                      'from': 'support@juvlon.com',
                      'body': 'This is an API test from Juvlon',
                      'to': 'shubhankar.kaushik2003@gmail.com'
                    }
                  ]
                })
              });
  }

export default submit;
