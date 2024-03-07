package com.example.ecom.repository;

import com.example.ecom.entity.CartItems;
import com.example.ecom.entity.Order;
import com.example.ecom.enums.OrderStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface OrderRepository extends JpaRepository<Order, Long> {

Order findByUserIdAndStatus(Long userId, OrderStatus orderStatus);



}
