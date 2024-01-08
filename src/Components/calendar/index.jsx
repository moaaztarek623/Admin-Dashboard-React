import React from "react";
import SubTitle from "../../global/SubTitle";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import {
  Box,
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme
} from "@mui/material";
import { tokens } from "../../theme";
import { AlertDialog, FormDialog } from "../../global/Dialog";
import { formatDate } from "@fullcalendar/core";
import { useMediaQuery } from "react-responsive";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = React.useState([]);
  const [title, setTitle] = React.useState("");
  const [openForm, setopenForm] = React.useState(false);
  const [selectedForm, setSelectedForm] = React.useState({});
  const [selectedAlert, setSelectedAlert] = React.useState({});
  const [openAlert, setOpenAlert] = React.useState(false);
  const [alertDialogDis, setAlertDialogDis] = React.useState("");
  const [acceptDelete, setAcceptDelete] = React.useState(false);
  const isSmallScreen = useMediaQuery({ query: "(max-width: 991px)" });
  let currentDate = new Date().toJSON().slice(0, 10);
  console.log(theme.palette.mode);

  const handleClickOpenForm = () => {
    setopenForm(true);
  };

  const handleClickOpenAlert = () => {
    setOpenAlert(true);
  };

  const handleCloseForm = (e) => {
    if (e.target.name === "accept") {
      const calendarApi = selectedForm.view.calendar;
      calendarApi.unselect();
        if (title !== "") {
          calendarApi.addEvent({
            id: `${selectedForm.dateStr}-${title}`,
            title,
            start: selectedForm.startStr,
            end: selectedForm.endStr,
            allDay: selectedForm.allDay
          });
        }
    }
    setTitle("");
    setSelectedForm({});
    setopenForm(false);
  };

  const handleCloseAlert = (e) => {
    if (e.target.name === "accept") {
        selectedAlert.event.remove();
    }
    setOpenAlert(false);
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onDateClick = (selected) => {
    setSelectedForm(selected);
    handleClickOpenForm();
  };

  const handleEventDelete = (selected) => {
    handleClickOpenAlert();
    setSelectedAlert(selected);
    setAlertDialogDis(
      `Are you sure you want to delete the event '${selected.event.title}' ?`
    );
  };

  return (
    <Box className="m-6">
      <SubTitle
        title={"Calendar"}
        subtitle={"Full Calendar Interactive Page"}
      />
      <Box display="flex" justifyContent="space-between" className={`gap-4 ${isSmallScreen ? "flex-col" : ""}`}>
        {/* CALENDAR SIDEBAR */}
        <Box
          backgroundColor={colors.primary[400]}
          className="rounded-[0.250rem] p-4"
          flex='1 1 20%'
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((item, index) =>
              <ListItem
                key={index}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  borderRadius: "0.125rem",
                  margin: "10px 0"
                }}
              >
                <ListItemText
                  primary={item.title}
                  secondary={
                    <Typography>
                      {formatDate(item.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric"
                      })}
                    </Typography>
                  }
                />
              </ListItem>
            )}
          </List>
        </Box>
        <Box className="flex" flex="1 1 100%" sx={{
          '& > div': {
            width: "100%"
          },
          "& .fc-list-day-cushion.fc-cell-shaded": {
            color: `${theme.palette.mode === "dark" ? colors.primary[700] : null} !important`,
          },
          "& .fc-event.fc-event-start.fc-event-end.fc-event-today.fc-event-future.fc-list-event": {
            ":hover": {
              color: `${theme.palette.mode === "dark" ? colors.primary[700] : null } !important`,
            }
          },
          "& .fc-header-toolbar.fc-toolbar.fc-toolbar-ltr":{
            flexDirection: `${isSmallScreen ? 'column' : 'row'} !important`,
          },
        }}>
          <FullCalendar
            height='75vh'
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              interactionPlugin,
              listPlugin
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth"
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true}
            dayMaxEvents={true}
            select={onDateClick}
            eventClick={handleEventDelete}
            eventsSet={events => setCurrentEvents(events)}
            initialEvents={[{ id: "15935", title: "Today", date: currentDate }]}
          />
        </Box>
      </Box>
      <FormDialog
        description="Please enter a new title for your event !"
        accept={"create"}
        cancel={"cancel"}
        handleClose={handleCloseForm}
        label={"title event"}
        open={openForm}
        type={"text"}
        variant={"filled"}
        key={0}
        value={title}
        onChange={onChangeTitle}
      />
      <AlertDialog
        description={alertDialogDis}
        cancel={"Cancel"}
        accept={"Agree"}
        open={openAlert}
        handleClose={handleCloseAlert}
      />
    </Box>
  );
};

export default Calendar;
