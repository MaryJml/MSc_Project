from flask import Flask, render_template, request, send_from_directory, jsonify

app = Flask(__name__)


@app.route('/static/js/<path:filename>')
def serve_js(filename):
    return send_from_directory(app.root_path + '/static/js/', filename, mimetype='application/javascript')


@app.route('/')
def network():
    return render_template('network.html', active_page=['network','home'])

@app.route('/spiderweb')
def spiderweb():
    return render_template('spiderweb.html', active_page=['spiderweb','home'])

@app.route('/chord')
def chord():
    return render_template('chord.html', active_page=['chord','home'])

@app.route('/euler')
def euler():
    return render_template('euler.html', active_page=['euler','home'])

@app.route('/intro')
def intro():
    return

@app.route('/guide')
def guide():
    return


if __name__ == '__main__':
    app.run(debug=True)

