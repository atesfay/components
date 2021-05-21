import React from "react";
import ReactDOM from "react-dom";
import faker from 'faker';
import CommentDetail from "./CommentDetail";
import ApprovalCard from './ApprovalCard';

const App = () => {
  return (
    <div className="ui container comments">
    <ApprovalCard>
        <CommentDetail
            author="Sam"
            commentTime="Today at 4:30PM"
            content="Nice picture"
            avatar={faker.image.avatar()}
        />
    </ApprovalCard>
    <ApprovalCard>
        <CommentDetail
            author="Alex"
            commentTime="Today at 3:50PM"
            content="What a life!"
            avatar={faker.image.avatar()}
        />
    </ApprovalCard>
    <ApprovalCard>
        <CommentDetail
            author="John"
            commentTime="Today at 2:30PM"
            content="I like how it looks"
            avatar={faker.image.avatar()}
        />
    </ApprovalCard>
    <ApprovalCard>
        <CommentDetail
            author="Sun"
            commentTime="Today at 1:10PM"
            content="Amazing picture"
            avatar={faker.image.avatar()}
        />
    </ApprovalCard>
    <ApprovalCard>
        <CommentDetail
            author="Junam"
            commentTime="Today at 11:30AM"
            content="Here is the picture"
            avatar={faker.image.avatar()}
        />
    </ApprovalCard>
    <ApprovalCard>
        <div>
            <h4>Warning!</h4>
            Are you sure you went to delete comment?
        </div>
    </ApprovalCard>
      
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
