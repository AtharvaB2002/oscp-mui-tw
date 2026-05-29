import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { BRAND } from "../../../common/theme";
import { useCms } from "../CmsProvider";
import type {
  ButtonData,
  CardsData,
  HeadingData,
  ImageData,
  ParagraphData,
} from "../types";

const HEADING_VARIANTS = {
  1: "h3",
  2: "h4",
  3: "h5",
  4: "h6",
} as const;

const primaryButtonSx = {
  bgcolor: BRAND.accent,
  fontWeight: 700,
  textTransform: "none" as const,
  borderRadius: 2,
  px: 2.5,
  "&:hover": { bgcolor: BRAND.accentDark },
};

export function HeadingBlock({ data }: { data: HeadingData }) {
  const { t } = useCms();
  return (
    <Typography
      variant={HEADING_VARIANTS[data.level ?? 2]}
      sx={{ fontWeight: 800, color: BRAND.primary, textAlign: data.align ?? "left" }}
    >
      {t(data.text)}
    </Typography>
  );
}

export function ParagraphBlock({ data }: { data: ParagraphData }) {
  const { t } = useCms();
  return (
    <Typography sx={{ color: "rgba(10,37,64,0.75)", lineHeight: 1.7 }}>
      {t(data.text)}
    </Typography>
  );
}

export function ImageBlock({ data }: { data: ImageData }) {
  const { t } = useCms();
  return (
    <Box
      component="img"
      src={data.src}
      alt={t(data.alt)}
      sx={{ width: "100%", height: "auto", borderRadius: 2, display: "block" }}
    />
  );
}

export function ButtonBlock({ data }: { data: ButtonData }) {
  const { t } = useCms();
  return (
    <Button variant="contained" href={data.href} sx={primaryButtonSx}>
      {t(data.label)}
    </Button>
  );
}

export function CardsBlock({ data }: { data: CardsData }) {
  const { t } = useCms();
  const columns = data.columns ?? 2;
  return (
    <Grid container spacing={3}>
      {data.items.map((item, index) => (
        <Grid item xs={12} md={12 / columns} key={index}>
          <Paper
            elevation={0}
            sx={{
              p: 3,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              border: "1px solid rgba(10,37,64,0.10)",
              borderRadius: 3,
            }}
          >
            <Stack spacing={1.25} sx={{ flexGrow: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, color: BRAND.primary }}>
                {t(item.heading)}
              </Typography>
              <Typography sx={{ color: "rgba(10,37,64,0.7)", lineHeight: 1.6 }}>
                {t(item.description)}
              </Typography>
            </Stack>
            {item.buttonLabel && item.href && (
              <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2.5 }}>
                <Button variant="contained" href={item.href} sx={primaryButtonSx}>
                  {t(item.buttonLabel)}
                </Button>
              </Box>
            )}
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
}
