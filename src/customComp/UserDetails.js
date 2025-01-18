import { Box, Button } from "@mui/material";

const UserDetails = ({ userData, fetchData }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px",
      }}
    >
      <Button variant="contained" sx={{ background: "red" }} onClick={fetchData}>
        Fetch Random
      </Button>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          background: "#d4efd4",
          margin: "20px",
          gap: "10px",
          perspective: "1000px",
        }}
      >
        {userData?.map((ele) => (
          <Box
            key={ele.id}
            sx={{
              position: "relative",
              display: "flex",
              flexDirection: "column",
              background: "white",
              borderRadius: "8px",
              alignItems: "center",
              margin: "10px",
              padding: "10px",
              height: "200px",
              width: "200px",
              boxShadow: 3,
              transformStyle: "preserve-3d",
              transition: "transform 0.6s",
              "&:hover": {
                transform: "rotateY(180deg)",
              },
            }}
          >
            {/* front side of card */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
              }}
            >
              <img
                src={ele.avatar}
                alt={ele.first_name}
                width={80}
                height={80}
              />
              <h4>
                {ele.first_name} {ele.last_name}
              </h4>
              <p>{ele.employment.title}</p>
            </Box>

            {/* back side of card after flip */}
            <Box
              sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              <h3>More Information here</h3>
              <p><b>Username: </b>{ele.username}</p>
              <p><b>Email: </b>{ele.email}</p>
              <p><b>Key Skill: </b>{ele?.employment?.key_skill}</p>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
export default UserDetails;
