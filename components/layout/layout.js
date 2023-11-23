import React, { useContext } from "react";
import NotificationContext from "../../store/notification-context";
import Notification from "../ui/notification";

function Layout(props) {
  const notificationCtx = useContext(NotificationContext);

  //when notification isn't null then render notification in layout
  const activeNotification = notificationCtx.notification;

  return (
    <React.Fragment>
      <main className="">{props.children}</main>
      {activeNotification && (
        <Notification
          title={activeNotification.title}
          message={activeNotification.message}
          status={activeNotification.status}
        ></Notification>
      )}
    </React.Fragment>
  );
}

export default Layout;
