import { useParams } from "react-router-dom";
import { Box, Container, Stack, Typography } from "@mui/material";
import { BRAND } from "../../common/theme";
import { useCms } from "./CmsProvider";
import { BlockRenderer } from "./components/BlockRenderer";

const DEFAULT_SLUG = "home";

export default function CmsPage() {
  const { slug } = useParams();
  const { getPage, t } = useCms();
  const page = getPage(slug ?? DEFAULT_SLUG);

  if (!page) {
    return (
      <Container maxWidth="md" sx={{ pt: { xs: 12, md: 14 }, pb: 8 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, color: BRAND.primary }}>
          Page not found
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ pt: { xs: 12, md: 14 }, pb: 8 }}>
      <Stack spacing={4}>
        <Typography variant="h3" sx={{ fontWeight: 800, color: BRAND.primary }}>
          {t(page.title)}
        </Typography>
        {page.blocks.map((block) => (
          <Box key={block.id}>
            <BlockRenderer block={block} />
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
