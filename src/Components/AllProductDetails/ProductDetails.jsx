
import React from 'react'
import './Product.css'

const ProductDetails = () => {
  return (
<div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src="https://rukminim1.flixcart.com/image/128/128/kfmv9u80/sweatshirt/u/g/p/l-hoodsweat-feather-black-smartees-original-imafwfgnfeg6t4fr.jpeg?q=70"/></div>
						</div>
						<ul className="preview-thumbnail nav nav-tabs">
						  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="https://rukminim1.flixcart.com/image/128/128/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zak3bnmpp.jpeg?q=70" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="https://rukminim1.flixcart.com/image/128/128/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zzzmbz3p8.jpeg?q=70" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="https://rukminim1.flixcart.com/image/128/128/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3z7hv9fuzf.jpeg?q=70" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="https://rukminim1.flixcart.com/image/128/128/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zvaxuzcsg.jpeg?q=70" /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src="https://rukminim1.flixcart.com/image/128/128/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zak3bnmpp.jpeg?q=70" /></a></li>
						</ul>
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">men's shoes fashion</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">41 reviews</span>
						</div>
						<p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
						<h4 className="price">current price: <span>$180</span></h4>
						<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">s</span>
							<span className="size" data-toggle="tooltip" title="medium">m</span>
							<span className="size" data-toggle="tooltip" title="large">l</span>
							<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span className="color green"></span>
							<span className="color blue"></span>
						</h5>
							<button className="add-to-cart btn btn-" type="button">add to cart</button>
							<br />
              <button className="like btn btn-default" type="button">Buy</button>
						</div>
						<div className="action">
					</div>
				</div>
			</div>
		</div>
	</div>  )
}

export default ProductDetails