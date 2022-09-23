 export default class Contact  {

    constructer(form) {
        this.fullName = form.getElements["fullName"].value
        this.email = form.getElements["email"].value
        this.subject = form.getElements["subject"].value
        this.body = form.getElements["msg"].value
        
    }
        fullName = "";
        email = "";
        subject = "";
        body = "";
    
        send() {
            console.info(this.formatMessage())
            document.getElementById("formInfo").innerHTML = "We're not sending emails yet... feature for version 2"
         }
        formatMessage() {
            return `To: ${this.fullName} 
                    Email: ${this.email}
                    Subject: ${this.subject}
                    Body: ${this.body}`;
        }
    };
    