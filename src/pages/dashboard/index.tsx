import {
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Divider,
  Button,
  CircularProgress,
  Stack,
  CardHeader,
} from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { fetchDashboardData } from "../../shared/api/dashboardApi";
import { ArrowRight, Calendar, ArrowUp } from "@phosphor-icons/react";
import DomainIcon from "@mui/icons-material/Domain";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AssignmentLateIcon from "@mui/icons-material/AssignmentLate";
import AppUsageChart from "./AppUsageChart"; // Импортируем ваш компонент

// Мок-данные для графика
const chartData = [
  { month: "Янв", thisYear: 400, lastYear: 240 },
  { month: "Фев", thisYear: 300, lastYear: 139 },
  { month: "Мар", thisYear: 200, lastYear: 180 },
  { month: "Апр", thisYear: 278, lastYear: 90 },
  { month: "Май", thisYear: 189, lastYear: 110 },
  { month: "Июн", thisYear: 239, lastYear: 180 },
  { month: "Июл", thisYear: 349, lastYear: 230 },
  { month: "Авг", thisYear: 200, lastYear: 50 },
  { month: "Сен", thisYear: 278, lastYear: 190 },
  { month: "Окт", thisYear: 189, lastYear: 180 },
  { month: "Ноя", thisYear: 239, lastYear: 180 },
  { month: "Дек", thisYear: 349, lastYear: 130 },
];

// Мок-данные для подписок
const subscriptions = [
  { name: "На рабочем месте", price: "115", status: "Работает" },
  { name: "Находятся в командировке", price: "3", status: "Командировка" },
  {
    name: "Находятся на лечении в связи со временной нетрудоспособностью",
    price: "10",
    status: "Больничный",
  },
  { name: "Находятся в отпуске", price: "15", status: "Отпуск" },
  { name: "Уволенные сотрудники", price: "4", status: "Уволен(а)" },
];

// Мок-данные для чата
const chatData = [
  {
    name: "Мастер 1",
    message: "Здравствуйте, необходимо загрузить отчет до 01.04",
    time: "2 мин. назад",
  },
  {
    name: "Мастер 1",
    message: "Здравствуйте, необходимо проверить объект №4",
    time: "2 часа назад",
  },
  {
    name: "Мастер 2",
    message: "Здравствуйте, необходимо проверить объект №3",
    time: "3 часов назад",
  },
  {
    name: "Мастер 2",
    message: "Здравствуйте, необходимо проверить объект №2",
    time: "8 часов назад",
  },
];

// Мок-данные для событий
const eventsData = [
  { date: "МАР 28", time: "08:00", title: "Проверка объекта №1" },
  { date: "МАР 31", time: "10:45", title: "Проверка объекта №2" },
  { date: "МАР 31", time: "23:30", title: "Проверка объекта №3" },
  { date: "АПР 3", time: "09:00", title: "Проверка объекта №4" },
];

export function DashboardPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["dashboardData"],
    queryFn: fetchDashboardData,
    initialData: {
      metrics: { tickets: 31, signUps: 240, openIssues: 21 },
      chart: chartData,
      subscriptions,
      chat: chatData,
      events: eventsData,
      appLimits: 80,
    },
  });

  return (
    <Box sx={{ p: 3 }}>
      {/* Метрики (Tickets, Sign ups, Open issues) */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={4}>
          <Card elevation={4} sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <DomainIcon
                  sx={{
                    boxShadow: 5, // Добавляем тень, аналогичную elevation={4}
                    width: 45,
                    height: 45,
                    p: 1,
                    borderRadius: 6,
                    color: "gray",
                  }}
                />
                <Stack>
                  <Typography variant="body1" color="text.secondary">
                    Количество объектов
                  </Typography>
                  <Typography variant="h4">{data.metrics.tickets}</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <ArrowUp size={16} color="green" />
                <Typography variant="body2" color="success.main">
                  +15% увеличение по сравнению с прошлым месяцем
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={4} sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <AssignmentIcon
                  sx={{
                    boxShadow: 5, // Добавляем тень, аналогичную elevation={4}
                    width: 45,
                    height: 45,
                    p: 1,
                    borderRadius: 6,
                    color: "gray",
                  }}
                />
                <Stack>
                  <Typography variant="body1" color="text.secondary">
                    Количество проверенных объектов
                  </Typography>
                  <Typography variant="h4">{data.metrics.signUps}</Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <ArrowUp
                  size={16}
                  color="red"
                  style={{ transform: "rotate(180deg)" }}
                />
                <Typography variant="body2" color="error.main">
                  -5% снижение по сравнению с прошлым месяцем
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card elevation={4} sx={{ borderRadius: 4 }}>
            <CardContent>
              <Stack
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 1 }}
              >
                <AssignmentLateIcon
                  sx={{
                    boxShadow: 5, // Добавляем тень, аналогичную elevation={4}
                    width: 45,
                    height: 45,
                    p: 1,
                    borderRadius: 6,
                    color: "gray",
                  }}
                />
                <Stack>
                  <Typography variant="body1" color="text.secondary">
                    Количество объектов с замечаниями
                  </Typography>
                  <Typography variant="h4">
                    {data.metrics.openIssues}
                  </Typography>
                </Stack>
              </Stack>
              <Stack direction="row" spacing={1} alignItems="center">
                <ArrowUp size={16} color="orange" />
                <Typography variant="body2" color="warning.main">
                  +12% увеличение по сравнению с прошлым месяцем
                </Typography>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* График и подписки */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Проверка объектов */}
        <Grid item xs={12} md={8}>
          <AppUsageChart
            data={data.chart}
            elevation={4} // Соответствует остальным карточкам
            borderRadius={4} // Соответствует остальным карточкам
          />
        </Grid>

        {/* Our subscriptions */}
        <Grid item xs={12} md={4}>
          <Card elevation={4} sx={{ borderRadius: 4, p: 2 }}>
            <CardHeader title="Сотрудники" />
            <CardContent>
              <List>
                {data.subscriptions.map((sub, index) => (
                  <Box key={index}>
                    <ListItem>
                      <ListItemText
                        primary={sub.name}
                        secondary={sub.price}
                        primaryTypographyProps={{ fontWeight: "medium" }}
                      />
                      <Typography
                        variant="body2"
                        color={
                          sub.status === "Работает"
                            ? "success.main"
                            : sub.status === "Командировка" ||
                                sub.status === "Отпуск"
                              ? "warning.main"
                              : "error.main"
                        }
                      >
                        {sub.status}
                      </Typography>
                    </ListItem>
                    {index < data.subscriptions.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
              <Button
                variant="text"
                endIcon={<ArrowRight />}
                sx={{ mt: 2 }}
                onClick={() => console.log("See all subscriptions")}
              >
                Подробнее...
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Чат, события и лимиты */}
      <Grid container spacing={3}>
        {/* App chat */}
        <Grid item xs={12} md={4}>
          <Card elevation={4} sx={{ borderRadius: 4, p: 2 }}>
            <CardHeader title="Последние сообщения" />
            <CardContent>
              <List>
                {data.chat.map((chat, index) => (
                  <Box key={index}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>{chat.name[0]}</Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={chat.name}
                        secondary={
                          <>
                            <Typography component="span" variant="body2">
                              {chat.message}
                            </Typography>
                            <br />
                            <Typography
                              component="span"
                              variant="caption"
                              color="text.secondary"
                            >
                              {chat.time}
                            </Typography>
                          </>
                        }
                      />
                    </ListItem>
                    {index < data.chat.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
              <Button
                variant="text"
                endIcon={<ArrowRight />}
                sx={{ mt: 2 }}
                onClick={() => console.log("Go to chat")}
              >
                Подробнее...
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Upcoming events */}
        <Grid item xs={12} md={4}>
          <Card elevation={4} sx={{ borderRadius: 4, p: 2 }}>
            <CardHeader title="План работы" />
            <CardContent>
              <List>
                {data.events.map((event, index) => (
                  <Box key={index}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: "primary.light" }}>
                          <Calendar />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={
                          <Typography variant="body1" fontWeight="medium">
                            {event.date} - {event.time}
                          </Typography>
                        }
                        secondary={event.title}
                      />
                    </ListItem>
                    {index < data.events.length - 1 && <Divider />}
                  </Box>
                ))}
              </List>
              <Button
                variant="text"
                endIcon={<ArrowRight />}
                sx={{ mt: 2 }}
                onClick={() => console.log("See all events")}
              >
                Посмотреть все события
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* App limits */}
        <Grid item xs={12} md={4}>
          <Card
            elevation={4}
            sx={{ borderRadius: 4, p: 2, textAlign: "center" }}
          >
            <CardHeader title="Статус текущего задания" />
            <CardContent>
              <Box sx={{ position: "relative", display: "inline-flex", mb: 2 }}>
                <CircularProgress
                  variant="determinate"
                  value={data.appLimits}
                  size={100}
                  thickness={5}
                  sx={{ color: "primary.main" }}
                />
                <Box
                  sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: "absolute",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography variant="h6">{`${data.appLimits}%`}</Typography>
                </Box>
              </Box>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Ожидается выгрузка отчета по проверке объекта №1
              </Typography>
              <Typography variant="body2" color="text.secondary" gutterBottom>
                Текущее задание выполнено на {data.appLimits}%.
              </Typography>
              <Button variant="contained" sx={{ mt: 2 }}>
                Подробнее...
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}
