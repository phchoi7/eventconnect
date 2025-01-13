import React from "react";
import { Link } from "react-router-dom";

/**
 * A styled sticky bottom nav that centers its items properly.
 */
export const MobileBottomNav: React.FC = () => {
  return (
    <nav
      className="mobile-bottom-nav d-lg-none d-block position-fixed bottom-0 w-100 bg-white"
      style={{
        zIndex: 9999, // ensure it sits above other elements
        borderTop: "1px solid #E4E6EF", // Subtle border
        height: "70px", // Ensure consistent height
      }}
    >
      <div
        className="container-fluid d-flex justify-content-between align-items-center h-100"
        style={{
          padding: "0 15px", // Adjust padding for spacing
        }}
      >
        {/* Nav Item 1: 首頁 */}
        <Link
          to="/home"
          className="nav-link text-center"
          style={{
            flex: 1, // Distribute space equally between items
          }}
        >
          <i className="fas fa-home fs-3 text-primary"></i>
          <div className="fw-bold fs-7 mt-1">首頁</div>
        </Link>

        {/* Nav Item 2: 賽程 */}
        <Link
          to="/schedule"
          className="nav-link text-center"
          style={{
            flex: 1,
          }}
        >
          <i className="fas fa-calendar-alt fs-3 text-primary"></i>
          <div className="fw-bold fs-7 mt-1">賽程</div>
        </Link>

        {/* Nav Item 3: 我要運動 (Center Icon) */}
        <Link
          to="/exercise"
          className="nav-link text-center"
          style={{
            flex: 1,
            marginBottom: "32px",
          }}
        >
          <i
            className="fas fa-dumbbell fs-3 text-danger"
            style={{
              background: "#fff",
              borderRadius: "50%",
              boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
              padding: "15px",
              marginBottom: "5px",
            }}
          ></i>
          <div className="fw-bold fs-7 mt-1">運動</div>
        </Link>

        {/* Nav Item 4: 互動 */}
        <Link
          to="/vote"
          className="nav-link text-center"
          style={{
            flex: 1,
          }}
        >
          <i className="fas fa-comments fs-3 text-primary"></i>
          <div className="fw-bold fs-7 mt-1">互動</div>
        </Link>

        {/* Nav Item 5: 個人 */}
        <Link
          to="/profile"
          className="nav-link text-center"
          style={{
            flex: 1,
          }}
        >
          <i className="fas fa-user fs-3 text-primary"></i>
          <div className="fw-bold fs-7 mt-1">個人</div>
        </Link>
      </div>
    </nav>
  );
};
