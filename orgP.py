def discover_original_price(discounted_price, sale_percentage):
    percent = (100 - sale_percentage) / 100
    return round(discounted_price / percent, 2)