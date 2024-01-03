import AdBanner from "../AdBanner";
import classes from "./all-posts.module.css";
import PostsGrid from "./post-grid";

function AllPosts(props) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
      <AdBanner
        data-ad-slot="7418594472"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </section>
  );
}

export default AllPosts;
