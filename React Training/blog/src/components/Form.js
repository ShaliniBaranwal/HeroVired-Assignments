function Form() {
    return (
        <div class="form">
            <label for="name">Name: </label>{' '}
            <input type="text" id="name"></input>
            <hr></hr>
            <label for="email">EMail: </label>{' '}
            <input type="email" id="email"></input>
            <hr></hr>
            <textarea
                placeholder="Leave a comment"
                id="comment"
                cols="29"
                rows="10"
            ></textarea>
        </div>
    );
}

export default Form;
