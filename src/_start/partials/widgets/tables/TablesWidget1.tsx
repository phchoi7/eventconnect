/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG, toAbsoluteUrl } from "../../../helpers";

type Props = {
  className: string;
  innerPadding?: string;
};

const TablesWidget1: React.FC<Props> = ({ className, innerPadding = "" }) => {
  return (
    <div className={`card ${className}`}>
      {/* Header */}
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            運動員表現排行榜
          </span>
          <span className="text-muted mt-2 fw-bold fs-6">本週最佳運動員</span>
        </h3>
        <div className="card-toolbar">
          <ul className="nav nav-pills nav-pills-sm nav-light">
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_1"
              >
                足球
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_2"
              >
                籃球
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder"
                data-bs-toggle="tab"
                href="#kt_tab_pane_1_3"
              >
                網球
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-2 pb-0 mt-n3">
        <div className="tab-content mt-5" id="myTabTables1">
          {/* Football Tab */}
          <div
            className="tab-pane fade active show"
            id="kt_tab_pane_1_1"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_1_1"
          >
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <thead>
                  <tr>
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-200px"></th>
                    <th className="p-0 min-w-100px"></th>
                    <th className="p-0 min-w-40px"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th className="px-0 py-3">
                      <div className="symbol symbol-65px me-5">
                        <span className="symbol-label bg-light-success">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/047-girl-25.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        李大華
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        進球數：4
                      </span>
                    </td>
                    <td>
                      <span className="text-muted fw-bold d-block fs-6">
                        球隊：沙田隊
                      </span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="px-0 py-3">
                      <div className="symbol symbol-65px me-5">
                        <span className="symbol-label bg-light-primary">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/018-girl-9.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        王偉
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        助攻數：3
                      </span>
                    </td>
                    <td>
                      <span className="text-muted fw-bold d-block fs-6">
                        球隊：深水埗隊
                      </span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Basketball Tab */}
          <div
            className="tab-pane fade"
            id="kt_tab_pane_1_2"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_1_2"
          >
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <tbody>
                  <tr>
                    <th className="px-0 py-3">
                      <div className="symbol symbol-65px me-5">
                        <span className="symbol-label bg-light-warning">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/001-boy.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        陳小明
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        得分：28
                      </span>
                    </td>
                    <td>
                      <span className="text-muted fw-bold d-block fs-6">
                        球隊：大埔隊
                      </span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Tennis Tab */}
          <div
            className="tab-pane fade"
            id="kt_tab_pane_1_3"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_1_3"
          >
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <tbody>
                  <tr>
                    <th className="px-0 py-3">
                      <div className="symbol symbol-65px me-5">
                        <span className="symbol-label bg-light-danger">
                          <img
                            alt="Logo"
                            src={toAbsoluteUrl(
                              "/media/svg/avatars/024-boy-9.svg"
                            )}
                            className="mh-40px"
                          />
                        </span>
                      </div>
                    </th>
                    <td className="ps-0">
                      <a className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        林建國
                      </a>
                      <span className="text-muted fw-bold d-block mt-1">
                        獲勝局：6
                      </span>
                    </td>
                    <td>
                      <span className="text-muted fw-bold d-block fs-6">
                        對手：陳大明
                      </span>
                    </td>
                    <td className="text-end pe-0">
                      <a className="btn btn-icon btn-bg-light btn-active-color-primary btn-sm">
                        <KTSVG
                          path="/media/icons/duotone/Navigation/Arrow-right.svg"
                          className="svg-icon-4"
                        />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { TablesWidget1 };
