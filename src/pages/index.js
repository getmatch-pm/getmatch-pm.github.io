import React from "react";
import theme from "theme";
import { Theme, Link, Strong, Text, Input, Box, Span, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml } from "@quarkly/components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Text margin="0px 0px 0px 0px" sm-height="24px" sm-font="1em --fontFamily-googleMontserrat" sm-margin="08px 0px 0px 8px">
			<Strong>
				Шаг 1 из 5
			</Strong>
		</Text>
		<Text margin="0px 0px 0px 0px" sm-height="24px" sm-font="15px --fontFamily-sans" sm-margin="8px 0px 0px 8px">
			Выберите формат работы (можно несколько):
		</Text>
		<Box
			min-width="100px"
			min-height="100px"
			sm-margin="8px 8px 0px 8px"
			sm-height="72px"
			sm-display="flex"
			sm-flex-direction="row"
			sm-flex-wrap="no-wrap"
			sm-overflow="visible"
			sm-border-color="#E3E4E5"
			sm-border-style="solid"
			sm-border-width="1px"
			sm-align-items="center"
			sm-justify-content="flex-start"
			sm-padding="0px 0px 0px 16px"
			sm-border-radius="4px"
		>
			<Input
				input
				type="checkbox"
				display="block"
				placeholder-color="LightGray"
				background="white"
				required={false}
				disabled={false}
				sm-width="16px"
				sm-height="16px"
				sm-display="inline-block"
			/>
			<Text
				margin="0px 0px 0px 0px"
				sm-height="16px"
				sm-align-self="center"
				sm-display="inline-block"
				sm-position="static"
				sm-margin="0px 0px 0px 8px"
			>
				Москва (гибрид или офис)
			</Text>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			sm-margin="8px 8px 0px 8px"
			sm-height="72px"
			sm-display="flex"
			sm-flex-direction="row"
			sm-flex-wrap="no-wrap"
			sm-overflow="visible"
			sm-border-color="#E3E4E5"
			sm-border-style="solid"
			sm-border-width="1px"
			sm-align-items="center"
			sm-justify-content="flex-start"
			sm-padding="0px 0px 0px 16px"
			sm-border-radius="4px"
		>
			<Input
				input
				type="checkbox"
				display="block"
				placeholder-color="LightGray"
				background="white"
				required={false}
				disabled={false}
				sm-width="16px"
				sm-height="16px"
				sm-display="inline-block"
			/>
			<Text
				margin="0px 0px 0px 0px"
				sm-height="16px"
				sm-align-self="center"
				sm-display="inline-block"
				sm-position="static"
				sm-margin="0px 0px 0px 8px"
			>
				Санкт-петербург  (гибрид или офис)
			</Text>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			sm-margin="8px 8px 0px 8px"
			sm-height="72px"
			sm-display="flex"
			sm-flex-direction="row"
			sm-flex-wrap="no-wrap"
			sm-overflow="visible"
			sm-border-color="#E3E4E5"
			sm-border-style="solid"
			sm-border-width="1px"
			sm-align-items="center"
			sm-justify-content="flex-start"
			sm-padding="0px 0px 0px 16px"
			sm-border-radius="4px"
		>
			<Input
				input
				type="checkbox"
				display="block"
				placeholder-color="LightGray"
				background="white"
				required={false}
				disabled={false}
				sm-width="16px"
				sm-height="16px"
				sm-display="inline-block"
			/>
			<Text
				margin="0px 0px 0px 0px"
				sm-height="16px"
				sm-align-self="center"
				sm-display="inline-block"
				sm-position="static"
				sm-margin="0px 0px 0px 8px"
			>
				Другие города  (гибрид или офис)
			</Text>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			sm-margin="8px 8px 0px 8px"
			sm-height="72px"
			sm-display="flex"
			sm-flex-direction="row"
			sm-flex-wrap="no-wrap"
			sm-overflow="visible"
			sm-border-color="#E3E4E5"
			sm-border-style="solid"
			sm-border-width="1px"
			sm-align-items="center"
			sm-justify-content="flex-start"
			sm-padding="0px 0px 0px 16px"
			sm-border-radius="4px"
		>
			<Input
				input
				type="checkbox"
				display="block"
				placeholder-color="LightGray"
				background="white"
				required={false}
				disabled={false}
				sm-width="16px"
				sm-height="16px"
				sm-display="inline-block"
			/>
			<Text
				margin="0px 0px 0px 0px"
				sm-height="16px"
				sm-align-self="center"
				sm-display="inline-block"
				sm-position="static"
				sm-margin="0px 0px 0px 8px"
			>
				Другие страны (гибрид или офис)
			</Text>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			sm-margin="8px 8px 0px 8px"
			sm-height="72px"
			sm-display="flex"
			sm-flex-direction="row"
			sm-flex-wrap="no-wrap"
			sm-overflow="visible"
			sm-border-color="#E3E4E5"
			sm-border-style="solid"
			sm-border-width="1px"
			sm-align-items="center"
			sm-justify-content="flex-start"
			sm-padding="0px 0px 0px 16px"
			sm-border-radius="4px"
		>
			<Input
				input
				type="checkbox"
				display="block"
				placeholder-color="LightGray"
				background="white"
				required={false}
				disabled={false}
				sm-width="16px"
				sm-height="16px"
				sm-display="inline-block"
			/>
			<Text
				margin="0px 0px 0px 0px"
				sm-height="16px"
				sm-align-self="center"
				sm-display="inline-block"
				sm-position="static"
				sm-margin="0px 0px 0px 8px"
			>
				Удалённая работа
			</Text>
		</Box>
		<Box
			min-width="100px"
			min-height="100px"
			sm-align-items="center"
			sm-flex-direction="row"
			sm-justify-content="center"
			sm-background="#000000"
			sm-position="absolute"
			sm-bottom="0px"
			sm-left="0px"
			sm-height="96px"
			sm-right="10.24609375px"
			sm-top="694px"
			sm-display="flex"
			sm-width="100%"
		>
			<Button
				sm-width="90%"
				sm-background="#205AED"
				sm-font="normal 300 15px/1.5 Montserrat"
				sm-height="48px"
				sm-border-radius="6px"
			>
				<Span
					overflow-wrap="normal"
					word-break="normal"
					white-space="normal"
					text-indent="0"
					text-overflow="clip"
					hyphens="manual"
					user-select="auto"
					pointer-events="auto"
				>
					<Strong
						overflow-wrap="normal"
						word-break="normal"
						white-space="normal"
						text-indent="0"
						text-overflow="clip"
						hyphens="manual"
						user-select="auto"
						pointer-events="auto"
					>
						Продолжить
					</Strong>
				</Span>
			</Button>
		</Box>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"676539abe5d27700189a3e6a"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});