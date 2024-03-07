package com.example.ecom.services.cart;

import com.example.ecom.dto.AddProductInCartDto;
import com.example.ecom.dto.OrderDto;
import org.springframework.http.ResponseEntity;

public interface CartService {

    public ResponseEntity<?> addProductToCart(AddProductInCartDto addProductInCartDto);

    OrderDto getCartByUserId(Long userId);


}
