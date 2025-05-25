import React from "react";
import { toAbsoluteUrl } from "../../../../_start/helpers";

export function Overview() {
  const user = {
    name: "James",
    email: "admin@demo.com",
    avatar: "https://via.placeholder.com/150",
    bio: "國家田徑隊成員，擅長100米短跑和接力賽，夢想成為奧運金牌得主。",
    stats: {
      championships: 12,
      medals: 25,
      records: 8,
    },
  };

  return (
    <div className="row g-5 g-xxl-8">
      {/* Profile Header */}
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-body d-flex align-items-center">
            {/* User Avatar */}
            <div className="symbol symbol-65px me-5">
              <span className="symbol-label bg-light-primary">
                <img
                  alt="Logo"
                  src={toAbsoluteUrl("/media/svg/avatars/024-boy-9.svg")}
                  className="mh-40px"
                />
              </span>
            </div>
            {/* User Information */}
            <div>
              <h2 className="fw-bold mb-1">{user.name}</h2>
              <p className="text-muted mb-1">{user.email}</p>
              <p className="text-muted">{user.bio}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Stats */}
      <div className="col-12">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h3 className="fw-bold">{user.stats.championships}</h3>
                <p className="text-muted mb-0">粉絲人數</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h3 className="fw-bold">{user.stats.medals}</h3>
                <p className="text-muted mb-0">獎牌總數</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="card shadow-sm text-center">
              <div className="card-body">
                <h3 className="fw-bold">{user.stats.records}</h3>
                <p className="text-muted mb-0">追蹤中</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="col-12">
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="fw-bold mb-3">關於我</h4>
            <p className="text-muted">
              我是一名出色的田徑運動員，代表國家參加多次國際賽事，並在亞洲錦標賽和世界田徑錦標賽中多次奪冠。他專注於100米和4x100米接力賽，是隊中的核心選手。
            </p>
            <p className="text-muted">
              他以速度和穩定著稱，曾在全國運動會中打破多項紀錄，並在奧運預選賽中取得佳績。他相信努力與團隊合作是成功的關鍵，並希望未來能帶領國家隊登上奧運頒獎台。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
