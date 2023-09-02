import * as React from "react";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";

// const messages = [
//   {
//     id: 1,
//     primary: "Brunch this week?",
//     secondary:
//       "I'll be in the neighbourhood this week. Let's grab a bite to eat",
//     person: "/static/images/avatar/5.jpg",
//   },
//   {
//     id: 2,
//     primary: "Birthday Gift",
//     secondary: `Do you have a suggestion for a good present for John on his work
//       anniversary. I am really confused & would love your thoughts on it.`,
//     person: "/static/images/avatar/1.jpg",
//   },
//   {
//     id: 3,
//     primary: "Recipe to try",
//     secondary:
//       "I am try out this new BBQ recipe, I think this might be amazing",
//     person: "/static/images/avatar/2.jpg",
//   },
//   {
//     id: 4,
//     primary: "Yes!",
//     secondary: "I have the tickets to the ReactConf for this year.",
//     person: "/static/images/avatar/3.jpg",
//   },
//   {
//     id: 5,
//     primary: "Doctor's Appointment",
//     secondary:
//       "My appointment for the doctor was rescheduled for next Saturday.",
//     person: "/static/images/avatar/4.jpg",
//   },
//   {
//     id: 6,
//     primary: "Discussion",
//     secondary: `Menus that are generated by the bottom app bar (such as a bottom
//       navigation drawer or overflow menu) open as bottom sheets at a higher elevation
//       than the bar.`,
//     person: "/static/images/avatar/5.jpg",
//   },
//   {
//     id: 7,
//     primary: "Summer BBQ",
//     secondary: `Who wants to have a cookout this weekend? I just got some furniture
//       for my backyard and would love to fire up the grill.`,
//     person: "/static/images/avatar/1.jpg",
//   },
// ];

export default function BottomAppBar({ messages }) {
  return (
    <React.Fragment>
      <Paper square sx={{ pb: "50px", background: "black" }}>
        <List sx={{ mb: 2 }}>
          {messages.map(({ id, image, title, follows }) => (
            <React.Fragment key={id}>
              <ListItem
                button
                sx={{
                  borderBottom: "2px solid green",
                  background: "black",
                  height: "75px",
                }}
              >
                <ListItemAvatar>
                  <Avatar alt="Profile Picture" src={image} />
                </ListItemAvatar>
                <ListItemText primary={title} secondary={follows} />
                <h3 style={{ color: "white" }}>{follows} Follows</h3>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </Paper>
    </React.Fragment>
  );
}
