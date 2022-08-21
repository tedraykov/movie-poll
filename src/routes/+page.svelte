<script lang='ts'>
	import { Button, Container, FilledInput, List, ListItem, Stack, Typography } from '@tedraykov/kitui';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Plus } from '@steeze-ui/heroicons';
	import type { PageData } from './$types';
	import Backdrop from '../lib/components/Backdrop.svelte';
	import {scale} from "svelte/transition";
	import type { definitions } from '../types/supabase';

	export let data: PageData = [];
	const { movies } = data;

	let addingMovie = false;
	let movieSelected = false;
	let selectedMovie: definitions["movies"] | undefined;

	function selectMovie() {
		console.log(Math.floor((Math.random() * movies.length)));
		selectedMovie = movies[Math.floor((Math.random() * movies.length))];
		movieSelected = true;
	}

	function toggleAdding() {
		addingMovie = !addingMovie;
	}
</script>

<svelte:head>
	<title>Movie Poll</title>
	<meta name='description' content="Select a movie randomly when you don't know what to watch" />
</svelte:head>

{#if !movieSelected}
	<div transition:scale>
		<Container class='max-w-[50ch]' >
			<Stack>
<!--				<Button on:click={toggleAdding} class='self-end border' color='accent'>-->
<!--					<Icon class='w-4' src={Plus} />-->
<!--				</Button>-->
<!--				{#if addingMovie}-->
<!--					<FilledInput id='add-movie-input' class="w-full" placeholder='Add a movie' />-->
<!--				{/if}-->
				<List class='py-0'>
					{#each movies as movie}
						<ListItem>
							<Typography class='font-bold'>
								{movie.title}
							</Typography>
						</ListItem>
					{/each}
				</List>

				<Button size='large' class='w-full' on:click={selectMovie}>Random Movie</Button>
			</Stack>
		</Container>
	</div>
	{:else}
		<Backdrop on:close={() => movieSelected = false} open={true}>
			<div class='w-full h-full flex items-center justify-center' transition:scale>
				<Typography variant='h1' class='text-white'>{selectedMovie.title}</Typography>
			</div>
		</Backdrop>
{/if}

<style>
	#add-movie-input input {
		@apply w-full;
	}
</style>
