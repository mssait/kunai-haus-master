package com.hionstudios.kunaihaus.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.hionstudios.MapResponse;
import com.hionstudios.datagrid.DataGridParams;
import com.hionstudios.db.DbTransaction;
import com.hionstudios.iam.IsAdmin;
import com.hionstudios.iam.IsUser;
import com.hionstudios.kunaihaus.flow.BillboardFlow;

@RestController
@RequestMapping("api/billboards")
public class BillboardController {
    @GetMapping
    public ResponseEntity<MapResponse> billboards() {
        return ((DbTransaction) () -> new BillboardFlow().billboards()).read();
    }

    @GetMapping("requests/my")
    @IsUser
    public ResponseEntity<MapResponse> myRequests(DataGridParams params) {
        return ((DbTransaction) () -> new BillboardFlow().myRequests(params)).read();
    }

    @GetMapping("requests")
    @IsAdmin
    public ResponseEntity<MapResponse> requests(DataGridParams params) {
        return ((DbTransaction) () -> new BillboardFlow().requests(params)).read();
    }

    @GetMapping("requests/pending")
    @IsAdmin
    public ResponseEntity<MapResponse> pending(DataGridParams params) {
        return ((DbTransaction) () -> new BillboardFlow().pendingRequests(params)).read();
    }

    @GetMapping("requests/approved")
    @IsAdmin
    public ResponseEntity<MapResponse> approved(DataGridParams params) {
        return ((DbTransaction) () -> new BillboardFlow().approvedRequests(params)).read();
    }

    @GetMapping("requests/rejected")
    @IsAdmin
    public ResponseEntity<MapResponse> rejected(DataGridParams params) {
        return ((DbTransaction) () -> new BillboardFlow().rejectedRequests(params)).read();
    }

    @GetMapping("requests/{id}")
    @IsAdmin
    public ResponseEntity<MapResponse> billboardRequest(@PathVariable long id) {
        return ((DbTransaction) () -> new BillboardFlow().billboardRequest(id)).read();
    }

    @PutMapping("requests/{id}")
    @IsAdmin
    public ResponseEntity<MapResponse> billboardRequestStatus(
            @PathVariable long id,
            @RequestParam boolean status,
            @RequestParam(required = false) String remark) {
        return ((DbTransaction) () -> new BillboardFlow().billboardRequestStatus(id, status, remark)).write();
    }

    @PostMapping
    public ResponseEntity<MapResponse> billboards(@RequestParam MultipartFile[] images) {
        return ((DbTransaction) () -> new BillboardFlow().billboards(images)).write();
    }

    @PutMapping("reorder")
    public ResponseEntity<MapResponse> reorder(
            @RequestParam String[] images) {
        return ((DbTransaction) () -> new BillboardFlow().reorder(images)).write();
    }

    @DeleteMapping
    public ResponseEntity<MapResponse> delete(
            @RequestParam String image) {
        return ((DbTransaction) () -> new BillboardFlow().removeImage(image)).write();
    }
}
