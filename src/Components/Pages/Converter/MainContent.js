import Item from "./components/Item";

export default function MainContent() {
  return (
    <section class="items">
      <Item
        icon="file"
        title="Create Markdown Files"
        content="We're working on giving you the power to create markdown files
          directly inside Markdown to PDF with quick export functionality."
      />

      <Item
        icon="book"
        title="Custom PDF Styles"
        content="Want to add some custom styling to your PDF? We've got you covered.
          We're currently working on allowing you to change heading/paragraph
          fonts and colours."
      />
      <Item
        icon="edit"
        title="Edit Markdown Files"
        content="Ever converted a Markdown file and spotted a mistake? Why go through
          the trouble of editing and reuploading when you can just edit Markdown
          files in Markdown To PDF."
      />
    </section>
  );
}
