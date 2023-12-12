import { createStore, action } from "easy-peasy";

export default createStore({
  posts: [],
  setPosts: action((state, payload) => {
    state.posts = payload;
  }),
  favPosts: [],
  setFavPosts: action((state, payload) => {
    state.favPosts.push(payload);
  }),
  search: "",
  setSearch: action((state, payload) => {
    state.search = payload;
  }),
  searchResults: [],
  setSearchResults: action((state, payload) => {
    state.searchResults = payload;
  }),
});
