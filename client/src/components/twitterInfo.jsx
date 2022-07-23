import React from 'react';

function TwitterInfo(props) {
  var metrics = props.twitterData.data;
  return (
  <div id="twitterInfo">
    <table id="twitterInfo">
      <tbody>
        <tr>
          <th>Username</th>
          <td>@{metrics.username}/{metrics.name}</td>
        </tr>
        <tr>
          <th>Followers</th>
          <td>{metrics.public_metrics.followers_count}</td>
        </tr>
        <tr>
          <th>Tweets</th>
          <td>{metrics.public_metrics.tweet_count}</td>
        </tr>
      </tbody>
    </table>
  </div>
  )

}

export default TwitterInfo;