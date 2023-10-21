const guideItems = [
  {
    headerTitle: 'Set up your online store',
    headerText: 'Add your first product',
    subText: `  Write a description, add photos, and set pricing for the products you plan to sell. &nbsp;
    <a to="#" class="link-text">
      Learn more
    </a>`,
    actionBtn: ` <div class="d-flex align-items-center gap-2 ">
    <a class="shopify-primary-btn active" to="#">
      Add product
    </a>
    <a class="shopify-primary-btn " to="#">
      Import products
    </a>
  </div>`,
    itemImage:
      'https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/detail-images/add-product-task-82867e5b12bebe27df4cb66f596e7ee22e637dd335ef729c4bbebe546e13e7e7.svg',

    // TODO: convert this to a component
    subOptions: `
    <div class="options d-flex flex-column gap-3 px-3 py-3">
        <div class="d-flex gap-2 align-items-center guide-item-sub-header">
          <span class="dotted-circle"></span>
          <p class="fnt-13 ">Customize your online store</p>
       </div>

        <div class="d-flex gap-2 align-items-center guide-item-sub-header">
          <span class="dotted-circle"></span>
          <p class="fnt-13 ">Add a custom domain</p>
        </div>
        <div class="d-flex gap-2 align-items-center guide-item-sub-header">
          <span class="dotted-circle"></span>
          <p class="fnt-13 ">Add sharing details</p>
      </div>
     </div>
    `,
  },

  {
    headerTitle: 'Store settings',
    headerText: 'Name your store',
    subText: `Your temporary store name is currently My Store. The store name appears in your admin and your online store. &nbsp;
    <a to="#" class="link-text ">
      Learn more
    </a>`,
    actionBtn: ` <div class="d-flex align-items-center gap-2 ">
    <a class="shopify-primary-btn active" to="#">
    Name store
    </a>
  
  </div>`,
    itemImage:
      'https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/detail-images/set-store-name-task-22a8814a6dc23cb97dbefe245a73ce190f820d739341f2bab72f140eb8abc650.svg',
    subOptions: `
    <div class="options d-flex flex-column gap-3 px-3 py-3">
          <div class="d-flex gap-2 align-items-center guide-item-sub-header">
            <span class="dotted-circle"></span>
            <p class="fnt-13 ">Set up payment provider</p>
        </div>
        <div class="d-flex gap-2 align-items-center guide-item-sub-header">
            <span class="dotted-circle"></span>
            <p class="fnt-13 ">Set up shipping rates</p>
        </div>
      </div>
    `,
  },

  {
    headerTitle: 'Launch your online store',
    headerText: 'Pick a plan',
    subText: `Choose a Shopify plan with the right features for your new business. &nbsp;
    <a to="#" class="link-text ">
      Learn more
    </a>`,
    actionBtn: ` <div class="d-flex align-items-center gap-2 ">
    <a class="shopify-primary-btn active" to="#">
    Pick a plan
    </a>
  
  </div>`,
    itemImage:
      'https://cdn.shopify.com/shopifycloud/shopify/assets/admin/home/onboarding/detail-images/pick-a-plan-task-1291b830c9b0068b88f0acce9eec3747d10965153050c50bb8d0fc2cb9202226.svg',
    subOptions: `
    <div class="options d-flex flex-column gap-3 px-3 py-3">
          <div class="d-flex gap-2 align-items-center guide-item-sub-header">
            <span class="dotted-circle"></span>
            <p class="fnt-13 ">Remove your store password</p>
        </div>
       
      </div>
    `,
  },
];

export { guideItems };
