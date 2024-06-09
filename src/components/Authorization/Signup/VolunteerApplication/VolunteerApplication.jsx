import React from "react";
import va from "./VolunteerApplication.module.css";
import { useForm } from "react-hook-form";

const VolunteerApplication = ({ setApplicationInfo = () => {} }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data, event) => {
    event && event.preventDefault();
    console.log(data);
    const formData = new FormData(event.target);

    setApplicationInfo(formData);
  };
  return (
    <div className={va.application_form}>
      <div className={va.fill_board}>
        <h1>Fill out the application form</h1>
      </div>
      <div>
        <form
          className={va.volunteer_application_form}
          onSubmit={handleSubmit(handleFormSubmit)}
        >
          <label htmlFor="passportPhoto">Passport Photo</label>
          <input
            id="passportPhoto"
            name="passport_photo"
            type="file"
            required
            {...register("passport_photo")}
          />
          <label htmlFor="volunteerExperience">
            Volunteer Experience (If had)
          </label>
          <textarea
            id="volunteerExperience"
            name="description"
            {...register("description")}
          />
          <label htmlFor="volunteerType">Volunteer Type</label>
          <select
            id="volunteerType"
            name="volonteer_type"
            required
            {...register("volonteer_type")}
          >
            <option value="student">Student</option>
            <option value="professional">Professional Volunteer</option>
          </select>
          <label htmlFor="photo">Photo</label>
          <input
            id="photo"
            name="photo"
            type="file"
            required
            {...register("photo")}
          />
          <label htmlFor="city">City</label>
          <input
            id="city"
            name="city"
            type="text"
            required
            {...register("city")}
          />
          <label htmlFor="country">Country</label>
          <input
            id="country"
            name="country"
            type="text"
            required
            {...register("country")}
          />
          <label htmlFor="instagram">Instagram (Not required)</label>
          <input
            id="instagram"
            name="instagram"
            type="text"
            {...register("instagram")}
          />
          <label htmlFor="facebook">Facebook (Not required)</label>
          <input
            id="facebook"
            name="facebook"
            type="text"
            {...register("facebook")}
          />
          <label htmlFor="youtube">YouTube (Not required)</label>
          <input
            id="youtube"
            name="youtube"
            type="text"
            {...register("youtube")}
          />
          <label htmlFor="telegram">Telegram (Not required)</label>
          <input
            id="telegram"
            name="telegram"
            type="text"
            {...register("telegram")}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerApplication;
