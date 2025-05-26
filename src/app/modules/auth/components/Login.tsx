import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as auth from "../redux/AuthRedux";
import { login } from "../redux/AuthCRUD";
import { toAbsoluteUrl } from "../../../../_start/helpers";

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("電郵格式錯誤")
    .min(3, "至少3個字符")
    .max(50, "最多50個字符")
    .required("必須填寫電郵"),
  password: Yup.string()
    .min(3, "至少3個字符")
    .max(50, "最多50個字符")
    .required("必須填寫密碼"),
});

const initialValues = {
  email: "admin@demo.com",
  password: "demo",
};

export function Login() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        login(values.email, values.password)
          .then(({ data: { accessToken } }) => {
            setLoading(false);
            dispatch(auth.actions.login(accessToken));
          })
          .catch(() => {
            setLoading(false);
            setSubmitting(false);
            setStatus("登入資料不正確");
          });
      }, 1000);
    },
  });

  return (
    <form
      className="form w-100"
      onSubmit={formik.handleSubmit}
      noValidate
      id="kt_login_signin_form"
    >
      {/* Title */}
      <div className="pb-lg-15">
        <h3 className="fw-bolder text-dark display-6">歡迎來到Go Safe AI</h3>
        <div className="text-muted fw-bold fs-3">
          新用戶？{" "}
          <Link
            to="/auth/registration"
            className="text-primary fw-bolder"
            id="kt_login_signin_form_singup_button"
          >
            創建賬戶
          </Link>
        </div>
      </div>

      {formik.status ? (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      ) : (
        <div className="mb-lg-15 alert alert-info">
          <div className="alert-text">
            使用憑據 <strong>admin@demo.com</strong> 和 <strong>demo</strong>{" "}
            登入。
          </div>
        </div>
      )}

      {/* Email Field */}
      <div className="fv-row mb-10 fv-plugins-icon-container">
        <label className="form-label fs-6 fw-bolder text-dark">電郵</label>
        <input
          placeholder="電郵"
          {...formik.getFieldProps("email")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            { "is-invalid": formik.touched.email && formik.errors.email },
            {
              "is-valid": formik.touched.email && !formik.errors.email,
            }
          )}
          type="email"
          name="email"
          autoComplete="off"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.email}</div>
          </div>
        )}
      </div>

      {/* Password Field */}
      <div className="fv-row mb-10 fv-plugins-icon-container">
        <div className="d-flex justify-content-between mt-n5">
          <label className="form-label fs-6 fw-bolder text-dark pt-5">
            密碼
          </label>
          <Link
            to="/auth/forgot-password"
            className="text-primary fs-6 fw-bolder text-hover-primary pt-5"
            id="kt_login_signin_form_password_reset_button"
          >
            忘記密碼？
          </Link>
        </div>
        <input
          type="password"
          autoComplete="off"
          {...formik.getFieldProps("password")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.password && formik.errors.password,
            },
            {
              "is-valid": formik.touched.password && !formik.errors.password,
            }
          )}
        />
        {formik.touched.password && formik.errors.password && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.password}</div>
          </div>
        )}
      </div>

      {/* Actions */}
      <div className="pb-lg-0 pb-5">
        <button
          type="submit"
          id="kt_login_signin_form_submit_button"
          className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-3"
          disabled={formik.isSubmitting || !formik.isValid}
        >
          {!loading && <span className="indicator-label">登入</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              請稍候...{" "}
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
        <button
          type="button"
          className="btn btn-light-primary fw-bolder px-8 py-4 my-3 fs-6 mr-3"
        >
          <img
            src={toAbsoluteUrl(
              "https://play-lh.googleusercontent.com/kT--WVNwDsN3jgG51dHC4vVB86qNYO46crO-5hwXJIP3MYz3scRbH1SGYVz4aTSfEg"
            )}
            className="w-20px h-20px me-3"
            alt=""
          />
          利用智方便登入
        </button>
      </div>
    </form>
  );
}
