var CommentList = createReactClass({
  propTypes: {
    projectId: PropTypes.number,
    currentUserId: PropTypes.number,
    deleteBasePath: PropTypes.string,
    deletePermission: PropTypes.bool,
    initialComments: PropTypes.array
  },

  getInitialState: function() {
    CommentStore.subscribe(this, this.updateComments);

    return {
      comments: this.props.initialComments
    }
  },

  componentWillUnmount: function() {
    CommentStore.unsubscribe(this, this.updateComments);
  },

  updateComments: function(that) {
    that.setState({ comments: CommentStore.getComments(that.props.projectId) });
  },

  handleDelete: function(id, e) {
    e.preventDefault();

    if (window.confirm(this.props.deleteConfirmationText)) {
      $.ajax({
        url: this.props.deleteBasePath+"/"+id,
        type: 'DELETE',
        success:() => {
          CommentStore.removeComment(id);
        }
      });
    }
  },
  
  render: function() {
    comments = this.state.comments || [];

    this.items = comments.map((comment) =>
      <div className="project__comment-wrapper" key={comment.id}>
        <figure className="user__image">
          <img src={comment.user_gravatar_url} />
        </figure>
        <div className="project__comment">
          <header>
            {comment.user_name}
            <i className={"icon icon-"+comment.visibility_class+" comment__visible-icon"} title={comment.viewable_by}></i>
            <time datetime={comment.created_at}> - {comment.created_at_human}</time>

            { (this.props.deletePermission || this.props.currentUserId == comment.user_id) &&
              <a className="comment__trash-link" href="#" onClick={this.handleDelete.bind(this, comment.id)}><i className="icon icon-trash" title={this.props.deleteIconText}></i></a>
            }
          </header>
          <div dangerouslySetInnerHTML={{__html: comment.body}}></div>
        </div>
      </div>
    );

    return (
      <React.Fragment>{this.items}</React.Fragment>
    );
  }
});
