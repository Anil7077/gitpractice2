import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha';

const index = () => {
    const [isVerified, setIsVerified] = useState(false);

    const handleRecaptchaChange = (value) => {
        setIsVerified(true);
        console.log(value);
    };
    return (
        <>
            <div>
                <form>
                    {/* Other form fields */}
                    <ReCAPTCHA
                        sitekey="6LdUI4ooAAAAAK1IVrsotkNH2S1QBUZRXWoP8bF3"
                        onChange={handleRecaptchaChange}
                    />
                    <button type="submit" disabled={!isVerified}>
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default index