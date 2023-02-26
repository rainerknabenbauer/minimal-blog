class CreateBlogEntryCmd {
    private email;
    private title;
    private content;

    constructor(
        email: string,
        title: string,
        content: string
    ) {
        this.email = email;
        this.title = title;
        this.content = content;
    }
}

export default CreateBlogEntryCmd;
