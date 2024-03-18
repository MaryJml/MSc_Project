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

@app.route('/guide/network')
def network_guide():
    return render_template('network_guide.html', active_page=['network_guide','guide'])

@app.route('/guide/spiderweb')
def spiderweb_guide():
    return render_template('spiderweb_guide.html', active_page=['spiderweb_guide','guide'])

@app.route('/guide/chord')
def chord_guide():
    return render_template('chord_guide.html', active_page=['chord_guide','guide'])

@app.route('/guide/euler')
def euler_guide():
    return render_template('euler_guide.html', active_page=['euler_guide','guide'])



if __name__ == '__main__':
    app.run(debug=True)

