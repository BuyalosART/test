import GUI from '../../build/lil-gui.module.js';

class PageGUI extends GUI {
	constructor( options ) {
		super( options );

		const names = Object.keys( options.pages );

		this._pages = options.pages;
		this._page = names[ 0 ];

		this._pageController = this.add( this, 'page', names );

		this._pages[ this._page ].call( this, this );

	}
	get page() {
		return this._page;
	}
	set page( v ) {

		this._page = v;

		this.children
			.filter( c => c !== this._pageController )
			.forEach( c => c.destroy() );

		this._pages[ v ].call( this, this );

	}
}

new PageGUI( {
	pages: {
		'The Default Page': gui => {
			gui.add( { one: 'one' }, 'one' );
		},
		'Page Two 😀': gui => {
			gui.add( { two: 'two' }, 'two' );
			gui.add( { two: 'two' }, 'two' );
		},
		pageThree( gui ) {
			gui.add( { three: 'three' }, 'three' );
			gui.add( { three: 'three' }, 'three' );
			gui.add( { three: 'three' }, 'three' );
		},
		pageFour: function() {
			this.add( { four: 'four' }, 'four' );
			this.add( { four: 'four' }, 'four' );
			this.add( { four: 'four' }, 'four' );
			this.add( { four: 'four' }, 'four' );
		},
		pageFive() {
			this.add( { five: 'five' }, 'five' );
			this.add( { five: 'five' }, 'five' );
			this.add( { five: 'five' }, 'five' );
			this.add( { five: 'five' }, 'five' );
			this.add( { five: 'five' }, 'five' );
		}
	}
} );
