const React         = require('react');
const ReactDOM      = require('react-dom');
const DocumentTitle = require('react-document-title');
const TitleBar      = require('./TitleBar');
const FadeImage     = require('./FadeImage');

const info    = require('./info.json');
const zipPath = require('./zip-info.json');

var Page = React.createClass({

  disabledSiteStyle: {
    color:'grey',
    IeUserSelect:'none',
    WebkitUserSelect:'none',
    MozUserSelect:'none',
    cursor:'default'
  },

  titleTextStyle: {
    color: 'white',
    width: '100%',
    textAlign: 'center',
    verticalAlign: ' middle',
    lineHeight: '60px',
    fontSize: 24,
    borderRadius: '5px'
  },

  infoBarStyle: {padding: 20, marginTop:10},

  infoBarInnerStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around'
  },

  infoBarLinksContainerStyle: {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-around',
    flexGrow:2
  },

  render: function () {
    const titleTxt = info.id.split('/').slice(1).join(' / ');
    var site;
    if (info.site == '') {
      site =
        (<div style={this.disabledSiteStyle} title='no website info available'>
          <span className="octicon octicon-link" />website
        </div>);
    }
    else {
      site =
        (<a href={info.site} target='_blank'>
          <span className="octicon octicon-link" /> website
        </a>);
    }
    const repo =
      <a href={info.repo} target='_blank'>
        <span className="octicon octicon-repo" /> repo
      </a>;
    return (
      <DocumentTitle title={titleTxt}><div>
        <TitleBar>
          <div style={this.titleTextStyle}>
            {titleTxt}
          </div>
        </TitleBar>
          <div style={this.infoBarStyle}>
            <div style={this.infoBarInnerStyle}>
              <div style={{marginBottom:10}}>{info.description}</div>
              <div style={this.infoBarLinksContainerStyle}>
                <div>{site}</div>
                <div>{repo}</div>
                <div>
                  <a href={zipPath}>
                    <span className="octicon octicon-circuit-board" /> gerbers
                  </a>
                </div>
              </div>
            </div>
          </div>
        <div style={{
          backgroundColor:'#373737'
          , borderRadius: '1em'
        }}
        >
        <img
          src='images/top.svg'
          style = {{
            width: '30%'
          }}
        />
        <img
          src='images/bottom.svg'
          style = {{
            width: '30%'
          }}
        />
        </div>
      </div></DocumentTitle>
    );
  },
});

module.exports = Page
