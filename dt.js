document.addEventListener("DOMContentLoaded", function() {
    const checkboxes = document.querySelectorAll('.brand-checkbox');
    const productList = document.getElementById('listsp');
    const products = productList.getElementsByClassName('sp');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const selectedBrands = Array.from(checkboxes)
                .filter(i => i.checked)
                .map(i => i.value);

            Array.from(products).forEach(sp => {
                if (selectedBrands.length === 0 || selectedBrands.includes(sp.dataset.brand)) {
                    product.style.display = 'block'; // Hiển thị sản phẩm
                } else {
                    product.style.display = 'none'; // Ẩn sản phẩm
                }
            });
        });
    });
});
