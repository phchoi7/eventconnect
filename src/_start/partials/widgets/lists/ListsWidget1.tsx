/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { KTSVG } from "../../../helpers";
import { Dropdown1 } from "../../content/dropdown/Dropdown1";

type Props = {
  className: string;
};

const ListsWidget1: React.FC<Props> = ({ className }) => {
  return (
    <div className={`card ${className}`}>
      {/* Header */}
      <div className="card-header align-items-center border-0 mt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bolder text-dark fs-3">運動賽程</span>
          <span className="text-muted mt-2 fw-bold fs-6">
            即時更新的比賽時間表
          </span>
        </h3>
        <div className="card-toolbar">
          {/* Dropdown */}
          <button
            type="button"
            className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
            data-kt-menu-trigger="click"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="top-end"
          >
            <KTSVG
              path="/media/icons/duotone/Layout/Layout-4-blocks-2.svg"
              className="svg-icon-1"
            />
          </button>
          <Dropdown1 />
          {/* Dropdown */}
        </div>
      </div>

      {/* Body */}
      <div className="card-body pt-3">
        {/* Timeline */}
        <div className="timeline-label">
          {/* Item 1 */}
          <div className="timeline-item">
            <div className="timeline-label fw-bolder text-gray-800 fs-6">
              10:00
            </div>
            <div className="timeline-badge">
              <i className="fa fa-futbol text-success fs-1"></i>
            </div>
            <div className="timeline-content d-flex">
              <span className="fw-bolder text-gray-800 ps-3">
                足球比賽 - 沙田隊 vs 馬鞍山隊
              </span>
              <span className="text-muted ps-3">場地：沙田運動場</span>
            </div>
          </div>

          {/* Item 2 */}
          <div className="timeline-item">
            <div className="timeline-label fw-bolder text-gray-800 fs-6">
              14:30
            </div>
            <div className="timeline-badge">
              <i className="fa fa-basketball-ball text-primary fs-1"></i>
            </div>
            <div className="timeline-content fw-bolder text-gray-800 ps-3">
              籃球比賽 - 紅磡隊 vs 荃灣隊
              <span className="text-muted d-block">場地：紅磡體育館</span>
            </div>
          </div>

          {/* Item 3 */}
          <div className="timeline-item">
            <div className="timeline-label fw-bolder text-gray-800 fs-6">
              16:00
            </div>
            <div className="timeline-badge">
              <i className="fa fa-table-tennis text-warning fs-1"></i>
            </div>
            <div className="timeline-content fw-mormal text-muted ps-3">
              網球比賽 - 王大明 vs 陳小芳
              <span className="text-muted d-block">場地：將軍澳網球中心</span>
            </div>
          </div>

          {/* Item 4 */}
          <div className="timeline-item">
            <div className="timeline-label fw-bolder text-gray-800 fs-6">
              19:00
            </div>
            <div className="timeline-badge">
              <i className="fa fa-running text-danger fs-1"></i>
            </div>
            <div className="timeline-content fw-bold text-gray-800 ps-3">
              田徑賽跑 - 男子100米決賽
              <span className="text-muted d-block">場地：大埔田徑場</span>
            </div>
          </div>
        </div>
        {/* Timeline */}
      </div>
    </div>
  );
};

export { ListsWidget1 };
