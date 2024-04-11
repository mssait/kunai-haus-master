import { Box, ButtonBase, Container, Grid, Stack, Typography } from "@mui/material"
import { Link } from "react-router-dom"
import AnimationWindow from "../components/AnimationWindow"
import Faqs from "../components/Faqs"

const HomePage = () => {

    const mapping = {
        "new-guinea-islands": "New Guinea Islands",
        "momase": "Momase Region",
        "southern": "Southern Region",
        "highland": "Highland Region"
    }

    return (
        <Box>
            <Box position="relative">
                <img style={{ width: "100%", height: "auto", display: "block", backgroundColor: "#000" }} src="/bg-1.webp" />
                <Box position="absolute" width="100%" top={0} left={0}>
                    <img style={{ width: "100%", height: "auto", display: "block" }} src="/kunai.png" />
                </Box>
                <Box position="absolute" left="25.55%" bottom="28.3%" width="9.44%" height="13.2%">
                    <ButtonBase sx={{ width: "100%", height: "100%", display: "block" }} component={Link} to="/region/new-guinea-islands">
                        <AnimationWindow />
                    </ButtonBase>
                </Box>
                <Box position="absolute" left="25.55%" bottom="13.2%" width="9.44%" height="13.2%">
                    <ButtonBase sx={{ width: "100%", height: "100%", display: "block" }} component={Link} to="/region/momase">
                        <AnimationWindow />
                    </ButtonBase>
                </Box>
                <Box position="absolute" right="25.3%" bottom="28.3%" width="9.44%" height="13.2%">
                    <ButtonBase sx={{ width: "100%", height: "100%", display: "block" }} component={Link} to="/region/highland">
                        <AnimationWindow />
                    </ButtonBase>
                </Box>
                <Box position="absolute" right="25.3%" bottom="13.2%" width="9.44%" height="13.2%">
                    <ButtonBase sx={{ width: "100%", height: "100%", display: "block" }} component={Link} to="/region/southern">
                        <AnimationWindow />
                    </ButtonBase>
                </Box>
            </Box>

            <Box my={{ md: 16, xs: 8 }} id="about-us">
                <Container>
                    <Grid container spacing={4}>
                        <Grid item md={6} xs={12} alignSelf="center">
                            <Typography fontWeight={700} mb={1}>
                                ABOUT E-HAUSWIN
                            </Typography>
                            <Typography mb={2} variant="h2" className="trochut-bold" color="primary.main">
                                Connecting SMEs with Essential Support for Success
                            </Typography>
                            <Typography>
                                Welcome to E-Hauswin, your gateway to a thriving ecosystem of support and collaboration for Small and Medium Enterprises (SMEs). At E-Hauswin, we envision a future where businesses can easily access the technical and financial assistance they need to flourish. Our platform serves as a bridge between SMEs and four pivotal pillars of support: Banks, Government Offices, Development Partners, and Private Companies.
                            </Typography>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <img style={{ width: "100%", height: "auto" }} src="/about.webp" />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box my={{ md: 16, xs: 8 }}>
                <Box mx={{ md: 8, xs: 4 }}>
                    <Box bgcolor="#C37359" borderRadius="30px" p={{ md: 8, xs: 4 }}>
                        <Stack direction={{ md: "row", xs: "column" }} spacing={{ md: 10, xs: 8 }}>
                            <Box >
                                <Typography variant="h2" className="trochut-bold" textAlign={{ md: "left", xs: "center" }}>
                                    Why choose E-Hauswin?
                                </Typography>
                            </Box>
                            <Box>
                                <Box bgcolor="#FFF" width={145} height={145} position="relative" borderRadius="20px" mb={2} mx="auto">
                                    <Box position="absolute" top="50%" left="50%" sx={{ transform: "translate(-50%, -50%)" }}>
                                        <img src="/early-access.svg" />
                                    </Box>
                                </Box>
                                <Typography variant="h3" className="trochut-bold" textAlign="center" mb={1}>
                                    Easy Access
                                </Typography>
                                <Typography textAlign="center">
                                    Our website is simple and easy to navigate so that businesses can quickly find the support they need.
                                </Typography>
                            </Box>
                            <Box>
                                <Box bgcolor="#FFF" width={145} height={145} position="relative" borderRadius="20px" mb={2} mx="auto">
                                    <Box position="absolute" top="50%" left="50%" sx={{ transform: "translate(-50%, -50%)" }}>
                                        <img src="/make-connections.svg" />
                                    </Box>
                                </Box>
                                <Typography variant="h3" className="trochut-bold" textAlign="center" mb={1}>
                                    Make Connections
                                </Typography>
                                <Typography textAlign="center">
                                    Join a community of businesses like yours and connect with all our support groups and grow your business hassle-free.
                                </Typography>
                            </Box>
                            <Box>
                                <Box bgcolor="#FFF" width={145} height={145} position="relative" borderRadius="20px" mb={2} mx="auto">
                                    <Box position="absolute" top="50%" left="50%" sx={{ transform: "translate(-50%, -50%)" }}>
                                        <img src="/verified-users.svg" />
                                    </Box>
                                </Box>
                                <Typography variant="h3" className="trochut-bold" textAlign="center" mb={1}>
                                    Verified Users
                                </Typography>
                                <Typography textAlign="center">
                                    To keep our services top-notch, SMEs can sign up by only by getting verified. This allows to build the quality community.
                                </Typography>
                            </Box>
                            <Box>
                                <Box bgcolor="#FFF" width={145} height={145} position="relative" borderRadius="20px" mb={2} mx="auto">
                                    <Box position="absolute" top="50%" left="50%" sx={{ transform: "translate(-50%, -50%)" }}>
                                        <img src="/free-trail.svg" />
                                    </Box>
                                </Box>
                                <Typography variant="h3" className="trochut-bold" textAlign="center" mb={1}>
                                    Free Trial
                                </Typography>
                                <Typography textAlign="center">
                                    If you're not ready to dive in, use our free trial option to try our high quality service without committing.
                                </Typography>
                            </Box>
                        </Stack>
                    </Box>
                </Box>
            </Box>

            <Box my={{ md: 16, xs: 8 }}>
                <Container>
                    <Typography textAlign="center" mb={2} variant="h2" className="trochut-bold" color="primary.main">
                        Our Pillars of Support
                    </Typography>
                    <Box mx={{ md: 16 }}>
                        <Stack spacing={8}>
                            {[
                                {
                                    title: "Banks",
                                    description: "Diverse Financial Solutions - Explore a range of financial services tailored to your business needs, with three distinct bank categories catering to various stages of growth.",
                                    img: "/bank.webp"
                                },
                                {
                                    title: "Government Offices",
                                    description: "Multi-level Governance - Benefit from assistance at different levels of government, ensuring that your business receives the support it needs, whether at the local, regional, or national level.",
                                    img: "/government-offices.webp"
                                },
                                {
                                    title: "Development Partners",
                                    description: "Collaborative Ecosystem - Connect with a network of Non-Governmental Organizations (NGOs), Bilateral Partners, Multilateral Partners, and Community-Based Organizations dedicated to fostering sustainable development.",
                                    img: "/development-partners.webp"
                                },
                                {
                                    title: "Private Companies",
                                    description: "Industry Collaboration - Unlock opportunities for collaboration with private enterprises that share a commitment to driving innovation and economic growth.",
                                    img: "/private-companies.webp"
                                },
                            ].map(({ title, description, img }, key) => (
                                <Box key={key}>
                                    <Grid container spacing={4}>
                                        <Grid item md={6} xs={12} order={{ md: key % 2 == 0 ? 1 : 2, xs: 1 }} alignSelf="center">
                                            <Typography variant="h2" className="trochut-bold" color="primary.main" mb={1}>{title}</Typography>
                                            <Typography>{description}</Typography>
                                        </Grid>
                                        <Grid item md={6} xs={12} order={{ md: key % 2 == 0 ? 2 : 1, xs: 2 }}>
                                            <img style={{ width: "100%", height: "auto", display: "block" }} src={img} />
                                        </Grid>
                                    </Grid>
                                </Box>
                            ))}
                        </Stack>
                    </Box>
                </Container>
            </Box>

            <Box my={{ md: 16, xs: 8 }} id="provinces">
                <Box bgcolor="#FFD983" py={{ md: 8, xs: 4 }}>
                    <Container>
                        <Typography textAlign="center" mb={3} variant="h2" className="trochut-bold" color="primary.main">
                            Our Provinces
                        </Typography>
                        <Typography mb={4}>
                            E-Hauswin, where support groups are strategically categorized across four regions, empowering users to seamlessly access tailored technical and financial assistance within their provinces. Discover a localized approach to growth, connecting SMEs with the right resources for success.
                        </Typography>

                        <Grid container spacing={{ md: 8, xs: 4 }}>
                            {[
                                {
                                    title: "New Guinea Islands",
                                    img: "/new-guinea-islands.webp",
                                    href: "/region/new-guinea-islands",
                                },
                                {
                                    title: "Momase Region",
                                    img: "/momase.webp",
                                    href: "/region/momase",
                                },
                                {
                                    title: "Southern Islands",
                                    img: "/southern-islands.webp",
                                    href: "/region/southern",
                                },
                                {
                                    title: "Highland Region",
                                    img: "/highland.webp",
                                    href: "/region/highland",
                                },
                            ].map(({ title, img, href }, key) => (
                                <Grid item md={6} xs={12} key={key}>
                                    <ButtonBase component={Link} to={href}>
                                        <Box position="relative">
                                            <img style={{ width: "100%", height: "auto", display: "block" }} src={img} />
                                            <Box position="absolute" bottom={0} width="100%">
                                                <Typography mb={2} color="#FFF" variant="h2" className="trochut-bold" textAlign="center">
                                                    {title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </ButtonBase>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>
            </Box>

            <Box my={{ md: 16, xs: 8 }} id="faqs" display="none">
                <Container>
                    <Typography textAlign="center" mb={{ md: 6, xs: 3 }} variant="h2" className="trochut-bold" color="primary.main">
                        Frequently Asked Questions
                    </Typography>
                    <Faqs faqs={[
                        {
                            question: "Lorem ipsum dolor sit amet. In incidunt corporis sed voluptatem magni eos debitis dolor non delectus aperiam sed expedita?",
                            answer: "Lorem ipsum dolor sit amet. Qui optio explicabo non reiciendis rerum sit quos dolor sed voluptatem nisi et officiis velit non repellat illo. In aliquid quia et galisum excepturi est nihil delectus aut velit perferendis sed velit aperiam. Est facilis dolorem vel deleniti galisum ea reiciendis quos et facilis suscipit sed dolor deleniti sit quos quod. Eum rerum incidunt eos maxime consequatur est obcaecati placeat.",
                        },
                        {
                            question: "Lorem ipsum dolor sit amet. In incidunt corporis sed voluptatem magni eos debitis dolor non delectus aperiam sed expedita?",
                            answer: "Lorem ipsum dolor sit amet. Qui optio explicabo non reiciendis rerum sit quos dolor sed voluptatem nisi et officiis velit non repellat illo. In aliquid quia et galisum excepturi est nihil delectus aut velit perferendis sed velit aperiam. Est facilis dolorem vel deleniti galisum ea reiciendis quos et facilis suscipit sed dolor deleniti sit quos quod. Eum rerum incidunt eos maxime consequatur est obcaecati placeat.",
                        },
                    ]} />
                </Container>
            </Box>
        </Box>
    )
}

export default HomePage