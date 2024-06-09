import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";
import s from "./../signup.module.css";

const ChooseUserType = ({
  control,
  errors,
  handleClickAfterChooseUserType = () => {},
}) => {
  return (
    <div className={s.user__type_wrapper}>
      <label htmlFor="user_type">Выберите, кем вы будете на платформе:</label>
      <FormControl fullWidth size="small" error={!!errors.user_type}>
        <Controller
          name="user_type"
          control={control}
          defaultValue=""
          rules={{
            required: "Тип пользователя является обязательным полем",
          }}
          render={({ field, fieldState: { error } }) => (
            <Select
              size="small"
              fullWidth
              sx={{
                borderRadius: "10px",
                paddingTop: "3px",
                paddingBottom: "3px",
                border: "1px solid #333333",
                marginTop: "5px",
                "& .MuiSelect-select:focus": {
                  backgroundColor: "transparent",
                },
                "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
                "& .MuiOutlinedInput-notchedOutline": {
                  borderColor: "transparent",
                },
              }}
              {...field}
              labelId="user_type_label"
              id="user_type"
            >
              <MenuItem value={0}>Читатель</MenuItem>
              <MenuItem value={1}>Волонтер</MenuItem>
              <MenuItem value={2}>Редактор</MenuItem>
            </Select>
          )}
        />
      </FormControl>
      <button
        onClick={handleClickAfterChooseUserType}
        className={s.classic__signup_button}
      >
        Continue
      </button>
    </div>
  );
};

export default ChooseUserType;
