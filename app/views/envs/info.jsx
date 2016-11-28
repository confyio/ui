/** @jsx React.DOM */

import MainView from 'confy/views/elements/main';
import EditorView from 'confy/views/elements/editor';

export default React.createClass({
  getInitialState: function () {
    return {lang: 'node'};
  },
  handleClick: function (e) {
    e.preventDefault();

    this.setState({lang: e.target.getAttribute('value') });
  },
  render: function () {
    return (
      <MainView type="Stage" header={window.env.get('name')}>
        <div className="getting-started">
          <a data-toggle="collapse" href="#documentation">Click here to integrate with your software</a>
        </div>
        <div className="collapse getting-started" id="documentation">
          <div>
            <ul className="nav nav-pills">
              <li role="presentation" className={this.state.lang == 'ruby' ? 'active' : ''}>
                <a href="#" onClick={this.handleClick} value="ruby">Ruby</a>
              </li>
              <li role="presentation" className={this.state.lang == 'node' ? 'active' : ''}>
                <a href="#" onClick={this.handleClick} value="node">Node</a>
              </li>
              <li role="presentation" className={this.state.lang == 'python' ? 'active' : ''}>
                <a href="#" onClick={this.handleClick} value="python">Python</a>
              </li>
              <li role="presentation" className={this.state.lang == 'php' ? 'active' : ''}>
                <a href="#" onClick={this.handleClick} value="php">Php</a>
              </li>
            </ul>
          </div>

          <h4>1. Install our API Client</h4>
          <p>First, you need to install our API client from the package manager.</p>
          <div className="highlight">
            <table>
              <tr>
                <td className="linenos">
                  <pre>1</pre>
                </td>
                <td className={'code' + (this.state.lang == 'ruby' ? ' active': '')}>
                  <pre>gem install confyio</pre>
                </td>
                <td className={'code' + (this.state.lang == 'node' ? ' active': '')}>
                  <pre>npm install confyio</pre>
                </td>
                <td className={'code' + (this.state.lang == 'python' ? ' active': '')}>
                  <pre>pip install confyio</pre>
                </td>
                <td className={'code' + (this.state.lang == 'php' ? ' active': '')}>
                  <pre>composer require confyio/confyio</pre>
                </td>
              </tr>
            </table>
          </div>

          <h4>2. Include it in Your Code</h4>
          <p>Add the above downloaded API client in your code.</p>
          <div className="highlight">
            <table>
              <tr>
                <td className="linenos">
                  <pre>1</pre>
                </td>
                <td className={'code' + (this.state.lang == 'ruby' ? ' active': '')}>
                  <pre><span className="nb">require</span> <span className="s2">&quot;confyio&quot;</span></pre>
                </td>
                <td className={'code' + (this.state.lang == 'node' ? ' active': '')}>
                  <pre><span className="kd">var</span> <span className="nn">confy</span> <span className="o">{'='}</span> <span className="kd">require</span><span className="p">(</span><span className="s1">&#39;confyio&#39;</span><span className="p">);</span></pre>
                </td>
                <td className={'code' + (this.state.lang == 'python' ? ' active': '')}>
                  <pre><span className="kn">import</span> <span className="nn">os</span><span className="o">,</span> <span className="nn">confy</span></pre>
                </td>
                <td className={'code' + (this.state.lang == 'php' ? ' active': '')}>
                  <pre><span className="k">require</span> <span className="s1">&#39;vendor/autoload.php&#39;</span><span className="p">;</span></pre>
                </td>
              </tr>
            </table>
          </div>

          <h4>3. Use the Read-Only Access Token</h4>
          <p>Copy the read-only access token for this stage into your code. You can also save it to an environment variable and use it from there.</p>
          <p>If your credentials are encrypted, you need to add an environment variable <b>CONFY_DECRYPT_PASS</b> with the decryption password.</p>
          <div className="highlight">
            <table>
              <tr>
                <td className="linenos">
                  <pre>1</pre>
                </td>
                <td className={'code' + (this.state.lang == 'ruby' ? ' active': '')}>
                  <pre><span className="n">token</span> <span className="o">{'='}</span> <span className="s2">&quot;{window.env.get('token')}&quot;</span></pre>
                </td>
                <td className={'code' + (this.state.lang == 'node' ? ' active': '')}>
                  <pre><span className="kd">var</span> <span className="nn">token</span> <span className="o">{'='}</span> <span className="s2">&quot;{window.env.get('token')}&quot;</span><span className="p">;</span></pre>
                </td>
                <td className={'code' + (this.state.lang == 'python' ? ' active': '')}>
                  <pre><span className="n">token</span> <span className="o">{'='}</span> <span className="s">&quot;{window.env.get('token')}&quot;</span></pre>
                </td>
                <td className={'code' + (this.state.lang == 'php' ? ' active': '')}>
                  <pre><span className="nv">$token</span> <span className="o">{'='}</span> <span className="s2">&quot;{window.env.get('token')}&quot;</span><span className="p">;</span></pre>
                </td>
              </tr>
            </table>
          </div>

          <h4>4. Call our API to Retrieve Data</h4>
          <p>Finally, call our API using the API client. It will retireve your software credentials for you and will also try to decrypt it if they are encrypted.</p>
          <div className="highlight">
            <table>
              <tr>
                <td className="linenos">
                  <pre>1<br/>2<br/>3</pre>
                </td>
                <td className={'code' + (this.state.lang == 'ruby' ? ' active': '')}>
                  <pre><span className="n">data</span> <span className="o">{'='}</span> <span className="no">Confy</span><span className="o">::</span><span className="no">Config</span><span className="o">.</span><span className="n">load</span><span className="p">{'({'}</span> <span className="ss">:token</span> <span className="o">{'=>'}</span> <span className="n">token</span> <span className="p">})</span><br/><br/><span className="nb">puts</span> <span className="n">data</span></pre>
                </td>
                <td className={'code' + (this.state.lang == 'node' ? ' active': '')}>
                  <pre><span className="nx">confy</span><span className="p">.</span><span className="nx">config</span><span className="p">.</span><span className="n">load</span><span className="p">{'({'}</span> <span className="n">token</span><span className="o">:</span> <span className="nx">token</span> <span className="p">},</span> <span className="kd">function</span> <span className="p">(</span><span className="n">err</span><span className="p">,</span> <span className="n">data</span><span className="p">)</span> <span className="p">{'{'}</span><br/>  <span className="nx">console</span><span className="p">.</span><span className="n">log</span><span className="p">(</span><span className="nx">data</span><span className="p">);</span><br/><span className="p">});</span></pre>
                </td>
                <td className={'code' + (this.state.lang == 'python' ? ' active': '')}>
                  <pre><span className="n">data</span> <span className="o">{'='}</span> <span className="nx">confy</span><span className="o">.</span><span className="nx">Config</span><span className="o">.</span><span className="n">load</span><span className="p">{'({'}</span> <span className="s">&#39;token&#39;</span><span className="p">:</span> <span className="n">token</span> <span className="p">})</span><br/><br/><span className="k">print</span><span className="p">(</span><span className="n">data</span><span className="p">)</span></pre>
                </td>
                <td className={'code' + (this.state.lang == 'php' ? ' active': '')}>
                  <pre><span className="nv">$data</span> <span className="o">{'='}</span> <span className="nx">Confy</span><span className="o">\</span><span className="nx">Config</span><span className="o">::</span><span className="na">load</span><span className="p">(</span><span className="k">array</span><span className="p">(</span><span className="s1">&#39;token&#39;</span> <span className="o">{'=>'}</span> <span className="nv">$token</span><span className="p">));</span><br/><br/><span className="k">echo</span> <span className="nv">$data</span><span className="p">;</span></pre>
                </td>
              </tr>
            </table>
          </div>

        </div>
        <EditorView json={window.env.config.getJSON()} />
      </MainView>
    );
  }
});
