/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import {
  EngageWidget5,
  ListsWidget1,
  StatsWidget1,
  StatsWidget2,
  TablesWidget1,
  TablesWidget2,
} from "../../../../_start/partials/widgets";
import { CreateAppModal } from "../_modals/create-app-stepper/CreateAppModal";
import { MobileBottomNav } from "../../MobileBottomNav";

export const StartDashboardPage: React.FC = () => {
  const [show, setShow] = useState(false);

  // Dummy Data
  const upcomingMatches = [
    { title: "足球 - 沙田隊 vs 馬鞍山隊", date: "12/25", time: "3:00 PM" },
    { title: "網球 - 王維奇 vs 陳大明", date: "12/26", time: "4:00 PM" },
  ];

  const recentResults = [
    {
      title: "足球 - 沙田隊 2 - 1 深水埗隊",
      date: "2025年12月23日",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "網球 - 陳小山 0 - 2 王小明",
      date: "2025年12月24日",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "籃球 - 大埔隊 20 - 17 沙田隊",
      date: "2025年12月24日",
      image: "https://via.placeholder.com/150",
    },
  ];

  const quickLinks = [
    { icon: "fas fa-futbol", label: "立即投票" },
    { icon: "fas fa-calendar-alt", label: "賽程" },
    { icon: "fas fa-chart-line", label: "實時比分" },
  ];

  return (
    <>
      {/* Header */}
      <div className="text-center my-4">
        <h3 className="fw-bold display-6 text-primary">全運互動通</h3>
        <p className="text-muted">帶來最新的全運會資訊與互動</p>
      </div>

      {/* 下一場比賽 */}
      <div className="mt-5 container">
        <h4 className="fw-bold text-primary mb-3">下一場比賽</h4>
        <div className="d-flex overflow-auto">
          {upcomingMatches.map((match, index) => {
            // Determine the image source based on the match type
            const isFootball = match.title.includes("足球");
            const imageSrc = isFootball
              ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSloF-ujqIPeHvOcbUpTkt_Va7kMVMXWOQQ&s"
              : "https://media.istockphoto.com/id/817164728/photo/tennis-players-playing-a-match-on-the-court.jpg?s=612x612&w=0&k=20&c=FU20TqadXiFLCQjw_WHDT3aNMDUdBBZYzIvxegz4X6Y=";

            return (
              <div
                key={index}
                className="card mx-2 shadow-sm border-0"
                style={{
                  width: "200px",
                  minWidth: "200px",
                  borderRadius: "12px",
                }}
              >
                <img
                  src={imageSrc}
                  className="card-img-top rounded-top"
                  alt="Match Thumbnail"
                  style={{ height: "120px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <p className="card-title fw-bold text-dark">{match.title}</p>
                  <p className="card-text text-muted small">
                    {match.date}, {match.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 最新結果 */}
      <div className="mt-5 container">
        <h4 className="fw-bold text-primary mb-3">最新結果</h4>
        {recentResults.map((result, index) => {
          // Determine the icon based on the type of the result
          let iconClass = "fas fa-futbol"; // Default icon
          if (result.title.includes("網球")) {
            iconClass = "fas fa-table-tennis"; // Tennis icon
          } else if (result.title.includes("籃球")) {
            iconClass = "fas fa-basketball-ball"; // Basketball icon
          }

          return (
            <div
              key={index}
              className="d-flex align-items-center mb-3 border-bottom pb-3"
            >
              {/* Icon instead of image */}
              <div
                className="d-flex align-items-center justify-content-center"
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  backgroundColor: "#f5f5f5",
                }}
              >
                <i className={`${iconClass} fs-2 text-primary`}></i>
              </div>
              <div className="ms-3">
                <p className="mb-1 fw-bold text-dark">{result.title}</p>
                <p className="text-muted small">{result.date}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Widgets */}
      <div className="row g-4 mt-5">
        {/* <div className="col-xl-4">
          <EngageWidget5 className="card-stretch shadow-sm" />
        </div> */}
        <div className="col-xl-8">
          <TablesWidget1 className="card-stretch shadow-sm" />
        </div>
      </div>

      <div className="row g-4 mt-4">
        <div className="col-xl-4">
          <StatsWidget1 className="card-stretch shadow-sm" />
        </div>
        {/* <div className="col-xl-8">
          <StatsWidget2 className="card-stretch shadow-sm" />
        </div> */}
      </div>

      <div className="row g-4 mt-4">
        <div className="col-xl-4">
          <ListsWidget1 className="card-stretch shadow-sm" />
        </div>
        <div className="col-xl-8">
          <TablesWidget2 className="card-stretch shadow-sm" />
        </div>
      </div>

      {/* Modal */}
      <CreateAppModal show={show} handleClose={() => setShow(false)} />
    </>
  );
};
