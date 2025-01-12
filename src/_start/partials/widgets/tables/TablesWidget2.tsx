/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { toAbsoluteUrl } from "../../../helpers";
import { KTSVG } from "../../../helpers";

type Props = {
  className: string;
  innerPadding?: string;
};

const TablesWidget2: React.FC<Props> = ({ className, innerPadding = "" }) => {
  return (
    <div className={`card ${className}`}>
      {/* Header */}
      <div className={`card-header border-0 pt-5 ${innerPadding}`}>
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bolder text-dark fs-3">
            運動員成績排行榜
          </span>
          <span className="text-muted mt-2 fw-bold fs-6">
            即時更新的比賽成績
          </span>
        </h3>
        <div className="card-toolbar">
          <ul className="nav nav-pills nav-pills-sm nav-light">
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2 active"
                data-bs-toggle="tab"
                href="#kt_tab_pane_2_1"
              >
                今日
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2"
                data-bs-toggle="tab"
                href="#kt_tab_pane_2_2"
              >
                本週
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder"
                data-bs-toggle="tab"
                href="#kt_tab_pane_2_3"
              >
                本月
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* Body */}
      <div className="card-body pt-3 pb-0 mt-n3">
        <div className="tab-content mt-4" id="myTabTables2">
          {/* Tab Pane: Today */}
          <div
            id="kt_tab_pane_2_1"
            role="tabpanel"
            aria-labelledby="kt_tab_pane_2_1"
            className="tab-pane fade active show"
          >
            <div className="table-responsive">
              <table className="table table-borderless align-middle">
                <thead>
                  <tr>
                    <th className="p-0 w-50px"></th>
                    <th className="p-0 min-w-150px">運動員</th>
                    <th className="p-0 min-w-100px">成績</th>
                    <th className="p-0 min-w-100px">項目</th>
                    <th className="p-0 min-w-50px text-end">排名</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-0 py-3">
                      <div className="symbol symbol-55px mt-1 me-5">
                        <img
                          alt="Athlete"
                          src={toAbsoluteUrl("/media/svg/avatars/001-boy.svg")}
                          className="mh-40px"
                        />
                      </div>
                    </td>
                    <td className="px-0">
                      <span className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        張偉
                      </span>
                      <span className="text-muted fw-bold d-block mt-1">
                        足球
                      </span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bold">3進球</span>
                    </td>
                    <td>
                      <span className="text-muted fw-bold">團體賽</span>
                    </td>
                    <td className="text-end fw-bolder text-primary">第1名</td>
                  </tr>
                  <tr>
                    <td className="px-0 py-3">
                      <div className="symbol symbol-55px mt-1 me-5">
                        <img
                          alt="Athlete"
                          src={toAbsoluteUrl(
                            "/media/svg/avatars/018-girl-9.svg"
                          )}
                          className="mh-40px"
                        />
                      </div>
                    </td>
                    <td className="px-0">
                      <span className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        李思涵
                      </span>
                      <span className="text-muted fw-bold d-block mt-1">
                        游泳
                      </span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bold">1:52.36</span>
                    </td>
                    <td>
                      <span className="text-muted fw-bold">
                        女子200米自由泳
                      </span>
                    </td>
                    <td className="text-end fw-bolder text-warning">第2名</td>
                  </tr>
                  <tr>
                    <td className="px-0 py-3">
                      <div className="symbol symbol-55px mt-1 me-5">
                        <img
                          alt="Athlete"
                          src={toAbsoluteUrl(
                            "/media/svg/avatars/047-girl-25.svg"
                          )}
                          className="mh-40px"
                        />
                      </div>
                    </td>
                    <td className="px-0">
                      <span className="text-gray-800 fw-bolder text-hover-primary fs-6">
                        王志強
                      </span>
                      <span className="text-muted fw-bold d-block mt-1">
                        籃球
                      </span>
                    </td>
                    <td>
                      <span className="text-gray-800 fw-bold">24得分</span>
                    </td>
                    <td>
                      <span className="text-muted fw-bold">男子半決賽</span>
                    </td>
                    <td className="text-end fw-bolder text-success">第3名</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Add additional tabs for week and month */}
        </div>
      </div>
    </div>
  );
};

export { TablesWidget2 };
