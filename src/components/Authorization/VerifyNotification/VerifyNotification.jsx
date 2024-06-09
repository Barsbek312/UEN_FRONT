import React from "react";

const VerifyNotification = () => {
  return (
    <div>
      <div className="white-bg">
        <div className="checkmail">
          <p>Dear User,</p>

          <p>
            A message with instructions to confirm your account{" "}
            <b>has been sent to your email.</b> Please check your inbox and
            follow the steps outlined in the email to{" "}
            <b>complete the registration process.</b>
          </p>

          <p>
            If you did not receive the email, please{" "}
            <b>check your Spam or Junk folder.</b> If you encounter any issues,
            please contact our support team.
          </p>

          <p>Thank you for your attention!</p>

          <p>Best regards,</p>
          <p>United Eco Nations Team</p>
        </div>
      </div>
    </div>
  );
};

export default VerifyNotification;
