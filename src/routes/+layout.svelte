<script lang="ts">
	import "../app.css"
	import { createTheme } from "@tedraykov/kitui/styles/createTheme";
	import setThemeContext from "@tedraykov/kitui/styles/setThemeContext";

	const theme = createTheme({
		components: {
			Button: {
				defaultProps: {
					variant: "outlined"
				}
			}
		}
	});
	setThemeContext(theme);
</script>

<main>
	<slot />
</main>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		height: 100vh;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
