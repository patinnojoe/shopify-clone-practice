import PropTypes from 'prop-types';

const InputCheckbox = () => {
  return (
    <div className="row g-3custom">
      <CheckboxItem
        inputId="onlineStore"
        title="An online store"
        subtext="Create a fully customizable website"
        imgURL="https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/online_store-79c72bf256871cacb2828e8856ce10f3a5de54afde1affc7ce6fbec6a304ab0b.svg"
      />

      <CheckboxItem
        inputId="InPersonStore"
        title="In person"
        subtext="Sell at retail stores, pop-ups,  or other physical locations"
        imgURL="https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/in_person-cd346f55b3c4968fa023e3193a643c864937e261b9842d33339a07322d303ccc.svg"
      />

      <CheckboxItem
        inputId="websiteAndBlog"
        title="An existing website or blog"
        subtext="Add a Buy Button to your websites"
        imgURL="https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/existing_website-f486a907a43a02935a652c38130c22781a3a151bb23dd11fd7c9210ff7cf4d44.svg"
      />

      <CheckboxItem
        inputId="socialMediaStore"
        title="Social media"
        subtext="Reach customers on Facebook, Instagram, TikTok, and more"
        imgURL="https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/social_media-a1fd14b54ca264ca77c0fef6570708bbed79d542ee53fc71e6430e4e3f978b74.svg"
      />

      <CheckboxItem
        inputId="onlineMarket"
        title="Online marketplaces"
        subtext="List products on Google, Amazon, and more"
        imgURL="https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/online_marketplace-6d8e60a764c0a522e8f66f8fa2e5fab2679128c600f7a5d321a77432a21ee4c5.svg"
      />

      <CheckboxItem inputId="unsure" title="" subtext="I'm not sure" imgURL="" />
    </div>
  );
};

export function CheckboxItem(props) {
  const { inputId, title, subtext, imgURL, imgAlt } = props;

  return (
    <div className="col-lg-6 ">
      <span className="ui-input-box checkbox-input">
        <label htmlFor={inputId} className="cursor-pointer d-flex gap-3 align-items-center w-100 h-100 p-3">
          <input type="checkbox" id={inputId} className="ui-input-checkbox" />

          <div className="d-flex flex-column">
            <p className="fw-bold fnt-14">{title}</p>
            <span className="fnt-13"> {subtext}</span>
          </div>
          <img src={imgURL} alt={imgAlt} />
        </label>
      </span>
    </div>
  );
}

// prop validation for checkbox item
CheckboxItem.propTypes = {
  inputId: PropTypes.string,
  title: PropTypes.string,
  imgURL: PropTypes.string,
  subtext: PropTypes.string,
  imgAlt: PropTypes.string,
};

// what you are selling
const ProductCheckbox = () => {
  return (
    <div className="row g-3custom">
      <CheckboxItem
        inputId="shippedByme"
        title="Products I buy or make myself"
        subtext="Shipped by me"
        imgURL="https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/physical_products-2a9f7c123e11dc3a3afdeb1d679d9625a7de184628d35ac6b60bcd22b3e7f26d.svg"
      />

      <CheckboxItem
        inputId="digitalProducts"
        title="Digital products"
        subtext="Music, digital art, NFTs"
        imgURL="https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/digital_products-c9b4bec72f21266a48ae3ebee22e848075f2050c87cfe78769b2cff8e57f2950.svg"
      />

      <CheckboxItem
        inputId="dropshippingProfucts"
        title="Dropshipping products"
        subtext="Sourced and shipped by a third party"
        imgURL="https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/dropshipping-a2749deed821f95f826a8eb803c24da4445285c237372dc67cb33bea28d591a7.svg"
      />

      <CheckboxItem
        inputId="services"
        title="Dropshipping products"
        subtext="Coaching, housekeeping, consulting"
        imgURL="https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/services-b39f1d3262a195a292d3a48d7f86b5f9783b499e4d800e7968daf8aba1a40b7c.svg"
      />

      <CheckboxItem
        inputId="onDemandProduct"
        title="Print-on-demand products"
        subtext="My designs, printed and shipped by a third party"
        imgURL="https://shopify-assets.shopifycdn.com/shopifycloud/shopify/assets/signup_questions/icons/print_on_demand-e2b2272848d4b0201cf7c6f24d105cbb3eba2b6acf54a4deb3ca430947feb425.svg"
      />

      <CheckboxItem inputId="unsure" title="" subtext="I'll decide later" imgURL="" />
    </div>
  );
};

export { InputCheckbox, ProductCheckbox };
