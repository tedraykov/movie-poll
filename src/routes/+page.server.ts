import type {PageServerLoad} from "./$types";
import {error} from "@sveltejs/kit";
import client from "../lib/supabase/client";
import type {definitions} from "../types/supabase";

export const load: PageServerLoad = async () => {

    const movies = await client.from<definitions["movies"]>("movies").select("*");

    if (movies) {
        return {movies: movies.data};
    }

    throw error(404, 'Not found');
}
