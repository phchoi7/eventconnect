/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
import * as Yup from "yup";
import clsx from "clsx";
import * as auth from "../redux/AuthRedux";
import { register } from "../redux/AuthCRUD";
import { Link } from "react-router-dom";

const initialValues = {
  firstname: "",
  lastname: "",
  email: "",
  password: "",
  changepassword: "",
  acceptTerms: false,
};

const registrationSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "至少3個字符")
    .max(50, "最多50個字符")
    .required("必須填寫名字"),
  email: Yup.string()
    .email("電郵格式錯誤")
    .min(3, "至少3個字符")
    .max(50, "最多50個字符")
    .required("必須填寫電郵"),
  lastname: Yup.string()
    .min(3, "至少3個字符")
    .max(50, "最多50個字符")
    .required("必須填寫姓氏"),
  password: Yup.string()
    .min(3, "至少3個字符")
    .max(50, "最多50個字符")
    .required("必須填寫密碼"),
  changepassword: Yup.string()
    .required("必須確認密碼")
    .when("password", {
      is: (val: string) => (val && val.length > 0 ? true : false),
      then: Yup.string().oneOf([Yup.ref("password")], "密碼與確認密碼不一致"),
    }),
  acceptTerms: Yup.bool().required("您必須同意條款與細則"),
});

export function Registration() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues,
    validationSchema: registrationSchema,
    onSubmit: (values, { setStatus, setSubmitting }) => {
      setLoading(true);
      setTimeout(() => {
        register(
          values.email,
          values.firstname,
          values.lastname,
          values.password
        )
          .then(({ data: { accessToken } }) => {
            setLoading(false);
            dispatch(auth.actions.login(accessToken));
          })
          .catch(() => {
            setLoading(false);
            setSubmitting(false);
            setStatus("註冊過程出現問題");
          });
      }, 1000);
    },
  });

  return (
    <form
      className="form w-100"
      noValidate
      id="kt_login_signup_form"
      onSubmit={formik.handleSubmit}
    >
      {/* Title */}
      <div className="pb-5 pb-lg-15">
        <h3 className="fw-bolder text-dark display-6">註冊帳戶</h3>
        <p className="text-muted fw-bold fs-3">輸入您的詳細信息以創建帳戶</p>
      </div>

      {formik.status && (
        <div className="mb-lg-15 alert alert-danger">
          <div className="alert-text font-weight-bold">{formik.status}</div>
        </div>
      )}

      {/* First Name */}
      <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">名字</label>
        <input
          placeholder="名字"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("firstname")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.firstname && formik.errors.firstname,
            },
            {
              "is-valid": formik.touched.firstname && !formik.errors.firstname,
            }
          )}
        />
        {formik.touched.firstname && formik.errors.firstname && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.firstname}</div>
          </div>
        )}
      </div>

      {/* Last Name */}
      <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">姓氏</label>
        <input
          placeholder="姓氏"
          type="text"
          autoComplete="off"
          {...formik.getFieldProps("lastname")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid": formik.touched.lastname && formik.errors.lastname,
            },
            {
              "is-valid": formik.touched.lastname && !formik.errors.lastname,
            }
          )}
        />
        {formik.touched.lastname && formik.errors.lastname && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.lastname}</div>
          </div>
        )}
      </div>

      {/* Email */}
      <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">電郵</label>
        <input
          placeholder="電郵"
          type="email"
          autoComplete="off"
          {...formik.getFieldProps("email")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            { "is-invalid": formik.touched.email && formik.errors.email },
            {
              "is-valid": formik.touched.email && !formik.errors.email,
            }
          )}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.email}</div>
          </div>
        )}
      </div>

      {/* Password */}
      <div className="fv-row mb-5">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">密碼</label>
        <input
          type="password"
          placeholder="密碼"
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

      {/* Confirm Password */}
      <div className="fv-row mb-10">
        <label className="form-label fs-6 fw-bolder text-dark pt-5">
          確認密碼
        </label>
        <input
          type="password"
          placeholder="再次輸入密碼"
          autoComplete="off"
          {...formik.getFieldProps("changepassword")}
          className={clsx(
            "form-control form-control-lg form-control-solid",
            {
              "is-invalid":
                formik.touched.changepassword && formik.errors.changepassword,
            },
            {
              "is-valid":
                formik.touched.changepassword && !formik.errors.changepassword,
            }
          )}
        />
        {formik.touched.changepassword && formik.errors.changepassword && (
          <div className="fv-plugins-message-container">
            <div className="fv-help-block">{formik.errors.changepassword}</div>
          </div>
        )}
      </div>

      {/* Accept Terms */}
      <div className="fv-row mb-10">
        <div className="form-check form-check-custom form-check-solid mb-5">
          <input
            className="form-check-input"
            type="checkbox"
            id="kt_login_toc_agree"
            {...formik.getFieldProps("acceptTerms")}
          />
          <label
            className="form-check-label fw-bold text-gray-600"
            htmlFor="kt_login_toc_agree"
          >
            我同意{" "}
            <Link to="/auth/terms" className="ms-1">
              條款與細則
            </Link>
          </label>
          {formik.touched.acceptTerms && formik.errors.acceptTerms && (
            <div className="fv-plugins-message-container">
              <div className="fv-help-block">{formik.errors.acceptTerms}</div>
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="d-flex flex-wrap pb-lg-0 pb-5">
        <button
          type="submit"
          id="kt_login_signup_form_submit_button"
          className="btn btn-primary fw-bolder fs-6 px-8 py-4 my-3 me-4"
          disabled={
            formik.isSubmitting || !formik.isValid || !formik.values.acceptTerms
          }
        >
          {!loading && <span className="indicator-label">提交</span>}
          {loading && (
            <span className="indicator-progress" style={{ display: "block" }}>
              請稍候...{" "}
              <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
            </span>
          )}
        </button>
        <Link to="/auth/login">
          <button
            type="button"
            id="kt_login_signup_form_cancel_button"
            className="btn btn-light-primary fw-bolder fs-6 px-8 py-4 my-3"
          >
            取消
          </button>
        </Link>
      </div>
    </form>
  );
}
