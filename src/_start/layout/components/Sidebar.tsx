import React, { useRef, useEffect } from "react";
import { SidebarGeneral, SidebarShop, SidebarUser } from "../../partials";
import { useTheme } from "../core";

const BG_COLORS = ["bg-white", "bg-info"];

export function Sidebar() {
  const { config, classes } = useTheme();
  const sidebarCSSClass = classes.sidebar;
  const sideBarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!sidebarCSSClass) {
      return;
    }

    BG_COLORS.forEach((cssClass) => {
      sideBarRef.current?.classList.remove(cssClass);
    });

    sidebarCSSClass.forEach((cssClass) => {
      sideBarRef.current?.classList.add(cssClass);
    });
  }, [sidebarCSSClass]);

  return (
    <>
      {!config.sidebar.display && (
        <div
          ref={sideBarRef}
          id="kt_sidebar"
          className="sidebar"
          data-kt-drawer="true"
          data-kt-drawer-name="sidebar"
          data-kt-drawer-activate="{default: true, lg: false}"
          data-kt-drawer-overlay="true"
          data-kt-drawer-width="{default:'200px', '350px': '300px'}"
          data-kt-drawer-direction="end"
          data-kt-drawer-toggle="#kt_sidebar_toggler"
        >
          {/* begin::Sidebar Content */}
          <div className="d-flex flex-column sidebar-body">
            {config.sidebar.content === "general" && <SidebarGeneral />}
            {config.sidebar.content === "shop" && (
              <SidebarShop sidebarRef={sideBarRef} />
            )}
            {config.sidebar.content === "user" && <SidebarUser />}
          </div>
          {/* end::Sidebar Content */}
        </div>
      )}
    </>
  );
}
