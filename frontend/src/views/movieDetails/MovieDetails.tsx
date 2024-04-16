import {
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  List,
  ListItem,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Typography,
} from "@mui/material";
import ResponsiveAppBar from "../../layouts/AppBar";
import Hero from "../../sections/Hero";
import React from "react";
import TheaterItem from "../../components/TheaterItem";

function MovieDetails() {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <ResponsiveAppBar />
      <Hero backgorundImg="https://i.imgur.com/HQ3ayVA.jpeg">
        <Typography variant="h2" component="h4" sx={{ color: "#fff" }}>
          Biệt Đội Săn Ma: <br />
          Kỷ Nguyên Băng Giá
        </Typography>
        <br />
        <Typography variant="h4" gutterBottom sx={{ color: "#fff" }}>
          Đạo diễn: Gil Kenan
        </Typography>
      </Hero>
      <Container sx={{ paddingBottom: "50px" }}>
        <Typography variant="h2" component="h4" sx={{ color: "#000" }}>
          Nội dung:
        </Typography>
        <Typography variant="body1" component="span" sx={{ color: "#000" }}>
          Kể từ lần đầu ra mắt năm 1984, Ghostbusters đã trở thành “thương hiệu”
          đáng nhớ tại Hollywood. Loạt phim kết hợp giữa kinh dị và hài hước
          mang đến trải nghiệm cực kỳ mới mẻ và ấn tượng, khiến khán giả thích
          thú. Biệt Đội Săn Ma: Kỷ Nguyên Băng Giá là phần phim thứ năm thuộc
          series Ghostbusters, được đạo diễn bởi Gil Kenan. Chuyện phim kể về
          gia đình Spengler quyết định rời khỏi vùng Summerville, Oklahoma để
          trở lại New York. Tại đây, “biệt đội săn ma nguyên bản” đã phát triển
          một phòng thí nghiệm nghiên cứu bảo mật cấp cao, tìm cách đưa việc
          tiêu diệt các hồn ma lên một bước tiến mới bằng loại vũ khí proton tối
          tân. Tuy nhiên, sự cố xảy ra đã vô tình giải phóng Death Chill - thế
          lực bí ẩn và độc ác nằm bên trong một món cổ vật. Điều này khiến cả
          những “cựu binh” và “tân binh” của biệt đội săn ma phải hợp tác để bảo
          vệ ngôi nhà của họ, cũng như bảo vệ thế giới trước mối hiểm họa mang
          tên Death Chill. Ngay từ tiêu đề, người xem có thể phần nào hình dung
          được sức mạnh khủng khiếp của kẻ phản diện. Thực thể bí ẩn này có thể
          tạo ra thiên tai, đe dọa khiến Trái đất phải trải qua “Kỷ Băng Hà thứ
          hai”. Lần này hàng loạt thảm họa kinh hoàng như động đất, vòi rồng hay
          sóng thần sẽ tàn phá thành phố New York. Ngoài ra, Death Chill dường
          như cũng có thể biến mặt đất và các nạn nhân thành băng. Death Chill
          sở hữu kích thước “khủng” cùng tạo hình đáng sợ với hai chiếc sừng dài
          nhọn hoắt. Theo như tiết lộ của Ray, Death Chill có thể tước đoạt mạng
          sống của nạn nhân bằng nỗi sợ hãi.
        </Typography>
        <Divider />
        <Typography variant="h2" component="h4" sx={{ color: "#000" }}>
          Lịch chiếu:
        </Typography>
        <Grid container spacing={4} paddingBottom={2}>
          <Grid item xs={6}>
            <List component={Stack} direction="row" sx={{ overflowX: "auto" }}>
              <ListItem>
                <Button variant="outlined">
                  Hôm nay <br />
                  16/04
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="outlined">
                  Hôm nay <br />
                  16/04
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="outlined">
                  Hôm nay <br />
                  16/04
                </Button>
              </ListItem>
              <ListItem>
                <Button variant="outlined">
                  Hôm nay <br />
                  16/04
                </Button>
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container>
          <TheaterItem />
        </Grid>
        <Divider />
      </Container>
    </>
  );
}

export default MovieDetails;
