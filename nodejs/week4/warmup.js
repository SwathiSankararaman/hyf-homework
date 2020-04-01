class Email {
    constructor(subject, body) {
        this.subject = subject;
        this.body = body;
    }
}

class SpamDetector {

    isSpam(email) {
        const totalLetters = email.body.length;
        const uppercaseLetters = (email.body.match(/[A-Z]/g) || []).length;
        const percentage = Math.round(uppercaseLetters / totalLetters * 100);

        if (!email.subject) {
            return true;
        } else if (email.subject.includes('Hello') && email.subject.length == 5) {
            return true;
        } else if (email.body.includes('Viagra') || email.body.includes('Offer') || email.body.includes('Free') | email.body.includes('Business Proposal')) {
            return true;
        } else if (percentage >= 60) {
            return true;
        } else {
            return false;
        }

    }

}

const emailFromOldFriend = new Email("Hello old friend", "Long time no see, when should we hang out again??");

const spamDetector = new SpamDetector();
console.log(spamDetector.isSpam(emailFromOldFriend)); // false