import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PaymentsService } from './payments.service';
import { SharedService } from '../../shared/shared.service';

describe('paymentsService', () => {
  let service: PaymentsService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('SharedService', ['methodName1', 'methodName2']);
  let sharedService: SharedService;


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ PaymentsService, { provide: SharedService, useValue: sharedServiceMock } ]
    });
    service = TestBed.inject(PaymentsService);
    sharedService = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  // test case gp create
  it('should send a POST request to the server', () => {
    const geppayments = { 
    user_name: 'user_name 1'
    total_price: 'total_price 1'
    cardholder_name: 'cardholder_name 1'
    invoiceid: 'invoiceid 1'
    }
    const jwtToken = '123Hsdf_23234fdsjk';
    
    // Make the API call
    service.GpCreate(geppayments).subscribe(response => {
      expect(response).toEqual(geppayments)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${sharedService.WEB_API}/geppayments?jwt_token=${jwtToken}`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(geppayments);

    // Flush the mocked response
    req.flush(geppayments);
  });



  
});
